#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, resolve, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baselineCommit = "0ecc355";

const approvedArtefacts = [
  {
    id: "FCDP-001",
    expectedPath:
      "knowledge-repository/00-enterprise/founder-design/FCDP-001-CONSTITUTIONAL-BLUEPRINT-OF-THE-REPUBLIC.md",
    root: true,
  },
  {
    id: "KR-001",
    expectedPath:
      "knowledge-repository/00-enterprise/constitution/KR-001-Knowledge-Repository-Constitution.md",
  },
  {
    id: "CDM-001",
    expectedPath:
      "knowledge-repository/00-enterprise/constitution/CDM-001-Constitutional-Derivation-Map.md",
  },
  {
    id: "AUTH-001",
    expectedPath:
      "knowledge-repository/00-enterprise/constitution/AUTH-001-Repository-Authority-Hierarchy.md",
  },
  {
    id: "MR-GOV-001",
    expectedPath:
      "knowledge-repository/00-enterprise/governance/MR-GOV-001-Constitutional-Governance-Foundation.md",
  },
  {
    id: "BC-001",
    expectedPath:
      "knowledge-repository/02-brand/constitution/BC-001-Brand-Constitution.md",
  },
  {
    id: "BF-001",
    expectedPath:
      "knowledge-repository/02-brand/frameworks/BF-001-Brand-Architecture-Framework.md",
  },
  {
    id: "BE-001",
    expectedPath:
      "knowledge-repository/02-brand/frameworks/BE-001-Brand-Expression-Framework.md",
  },
  {
    id: "CX-001",
    expectedPath:
      "knowledge-repository/03-experience/constitution/CX-001-Republic-Experience-Constitution.md",
    baselinePath:
      "knowledge-repository/02-brand/constitution/CX-001-Republic-Experience-Constitution.md",
  },
].map((artefact) => ({
  ...artefact,
  baselinePath: artefact.baselinePath ?? artefact.expectedPath,
}));

const requestedMetadata = [
  "Document ID",
  "Title",
  "Version",
  "Status",
  "Authority Level",
  "Parent Authority",
  "Derived From",
  "Repository Domain",
  "Document Family",
];

const expectedPrimaryParents = new Map([
  ["KR-001", "FCDP-001"],
  ["CDM-001", "KR-001"],
  ["AUTH-001", "CDM-001"],
  ["MR-GOV-001", "AUTH-001"],
]);

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function repositoryPath(absolutePath) {
  return relative(repositoryRoot, absolutePath).split("\\").join("/");
}

function walkMarkdown(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory)
    .flatMap((entry) => {
      const absolutePath = resolve(directory, entry);
      return statSync(absolutePath).isDirectory()
        ? walkMarkdown(absolutePath)
        : absolutePath.endsWith(".md")
          ? [repositoryPath(absolutePath)]
          : [];
    })
    .sort();
}

function stripMarkdownLineEnding(value) {
  return value.replace(/\\$/, "").trim();
}

function extractMetadata(content) {
  const lines = content.split(/\r?\n/);
  const exact = {};

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^\*\*([^*]+):\*\*\s*(.*)$/);
    if (!match) continue;

    const label = match[1].trim();
    const parts = [stripMarkdownLineEnding(match[2])].filter(Boolean);
    let cursor = index + 1;

    while (cursor < lines.length) {
      const continuation = lines[cursor];
      if (
        continuation.trim() === "" ||
        continuation.startsWith("#") ||
        continuation.startsWith("**") ||
        /^-{3,}$/.test(continuation.trim())
      ) {
        break;
      }
      parts.push(stripMarkdownLineEnding(continuation));
      cursor += 1;
    }

    exact[label] = parts.join(" ").trim();
  }

  const tableLabels = [
    "Document ID",
    "Document Title",
    "Version",
    "Status",
    "Authority",
    "Owner",
    "Classification",
  ];

  for (const label of tableLabels) {
    const expression = new RegExp(`^\\s*${label}\\s{2,}(.+)$`);
    const row = lines.find((line) => expression.test(line));
    if (row) exact[label] = row.match(expression)[1].trim();
  }

  const values = Object.fromEntries(
    requestedMetadata.map((field) => [field, exact[field] ?? null]),
  );
  const labelVariances = [];

  if (!values["Document ID"] && exact["Programme ID"]) {
    values["Document ID"] = exact["Programme ID"];
    labelVariances.push({
      requested: "Document ID",
      actual: "Programme ID",
      value: exact["Programme ID"],
    });
  }

  if (!values.Title && exact["Document Title"]) {
    values.Title = exact["Document Title"];
    labelVariances.push({
      requested: "Title",
      actual: "Document Title",
      value: exact["Document Title"],
    });
  }

  if (!values["Authority Level"] && exact.Authority) {
    labelVariances.push({
      requested: "Authority Level or derivation fields",
      actual: "Authority",
      value: exact.Authority,
    });
  }

  return { exact, values, labelVariances };
}

function extractIds(value) {
  if (!value) return [];
  return [
    ...new Set(
      value.match(/\b(?:MR-)?[A-Z]+(?:-[A-Z]+)*-\d{3}\b/g) ?? [],
    ),
  ];
}

function baselineBytes(path) {
  return execFileSync("git", ["show", `${baselineCommit}:${path}`], {
    cwd: repositoryRoot,
    encoding: null,
  });
}

function parseArguments() {
  const args = process.argv.slice(2);
  const outputIndex = args.indexOf("--output");

  if (outputIndex === -1) return { output: null };
  if (!args[outputIndex + 1]) {
    throw new Error("--output requires a repository-relative path");
  }

  return { output: args[outputIndex + 1] };
}

const markdownPaths = walkMarkdown(
  resolve(repositoryRoot, "knowledge-repository"),
);
const approvedIds = new Set(approvedArtefacts.map(({ id }) => id));
const parsedDocuments = markdownPaths.map((path) => {
  const content = readFileSync(resolve(repositoryRoot, path), "utf8");
  return { path, content, metadata: extractMetadata(content) };
});

const idDeclarationCounts = new Map(
  [...approvedIds].map((id) => [
    id,
    parsedDocuments.filter(
      ({ metadata }) => metadata.values["Document ID"] === id,
    ).length,
  ]),
);

const blockers = [];

const artefactChecks = approvedArtefacts.map((artefact) => {
  const expectedFilename = basename(artefact.expectedPath);
  const locatedPaths = markdownPaths.filter(
    (path) => basename(path) === expectedFilename,
  );
  const locatedPath = locatedPaths.length === 1 ? locatedPaths[0] : null;
  const placementPass =
    locatedPaths.length === 1 && locatedPath === artefact.expectedPath;

  if (!placementPass) {
    blockers.push({
      code: "PLACEMENT",
      id: artefact.id,
      expectedPath: artefact.expectedPath,
      locatedPaths,
    });
  }

  const baseline = baselineBytes(artefact.baselinePath);
  const current = locatedPath
    ? readFileSync(resolve(repositoryRoot, locatedPath))
    : null;
  const baselineSha256 = sha256(baseline);
  const currentSha256 = current ? sha256(current) : null;
  const contentIntegrityPass =
    currentSha256 !== null && currentSha256 === baselineSha256;

  if (!contentIntegrityPass) {
    blockers.push({
      code: "CONTENT_INTEGRITY",
      id: artefact.id,
      baselineSha256,
      currentSha256,
    });
  }

  const parsed = locatedPath
    ? parsedDocuments.find((document) => document.path === locatedPath)
    : null;
  const metadata = parsed?.metadata ?? {
    exact: {},
    values: Object.fromEntries(
      requestedMetadata.map((field) => [field, null]),
    ),
    labelVariances: [],
  };
  const applicableMetadata = artefact.root
    ? requestedMetadata.filter(
        (field) => !["Parent Authority", "Derived From"].includes(field),
      )
    : requestedMetadata;
  const missingMetadata = applicableMetadata.filter(
    (field) => !metadata.values[field],
  );

  const relationLabels = [
    "Parent Authority",
    "Derived From",
    "Related Authority",
    "Authority",
  ];
  const relationIds = [
    ...new Set(
      relationLabels.flatMap((label) => extractIds(metadata.exact[label])),
    ),
  ];
  const upstreamApprovedReferences = relationIds.filter(
    (id) => id !== artefact.id && approvedIds.has(id),
  );
  const unresolvedReferences = relationIds.filter(
    (id) => id !== artefact.id && !approvedIds.has(id),
  );
  const orphanPass = artefact.root || upstreamApprovedReferences.length > 0;

  if (!orphanPass) {
    blockers.push({
      code: "ORPHAN",
      id: artefact.id,
      relationIds,
    });
  }

  const idDeclarationCount = idDeclarationCounts.get(artefact.id);
  const idUniquePass = idDeclarationCount === 1;

  if (!idUniquePass) {
    blockers.push({
      code: "DOCUMENT_ID_UNIQUENESS",
      id: artefact.id,
      declarationCount: idDeclarationCount,
    });
  }

  return {
    id: artefact.id,
    expectedPath: artefact.expectedPath,
    baselinePath: artefact.baselinePath,
    locatedPaths,
    placementPass,
    baselineSha256,
    currentSha256,
    contentIntegrityPass,
    idDeclarationCount,
    idUniquePass,
    metadata: metadata.values,
    metadataLabelVariances: metadata.labelVariances,
    missingMetadata,
    upstreamApprovedReferences,
    unresolvedReferences,
    orphanPass,
  };
});

const declaredPrimaryParents = Object.fromEntries(
  artefactChecks.map((check) => [
    check.id,
    extractIds(check.metadata["Parent Authority"])[0] ?? null,
  ]),
);

const authorityChainVariances = [...expectedPrimaryParents].flatMap(
  ([id, expectedParent]) => {
    const declaredParent = declaredPrimaryParents[id];
    return declaredParent === expectedParent
      ? []
      : [{ id, expectedParentFromBrief: expectedParent, declaredParent }];
  },
);

const cdm = parsedDocuments.find(
  ({ path }) =>
    path ===
    "knowledge-repository/00-enterprise/constitution/CDM-001-Constitutional-Derivation-Map.md",
);
const cxTerminologyVariance =
  cdm?.content.includes("CX-001 --- Republic Experience Framework") ?? false;

const missingMetadataCount = artefactChecks.reduce(
  (total, artefact) => total + artefact.missingMetadata.length,
  0,
);

const conditions = [
  {
    code: "AUTHORITY_CHAIN_VARIANCE",
    disposition: "Founder decision required",
    statement:
      "The programme brief's linear enterprise authority chain is not declared exactly by current Parent Authority metadata.",
    variances: authorityChainVariances,
  },
  {
    code: "CX_TERMINOLOGY_VARIANCE",
    disposition: "Founder decision required",
    statement:
      "CDM-001 names CX-001 as a Republic Experience Framework while CX-001 identifies itself as a Republic Experience Constitution.",
    observed: cxTerminologyVariance,
  },
  {
    code: "METADATA_OMISSIONS",
    disposition: "Standardisation requires Founder-approved values",
    statement:
      "Requested metadata fields are absent or use non-standard labels across the approved platform.",
    missingFieldCount: missingMetadataCount,
  },
  {
    code: "LEGACY_ARCHITECTURE_VARIANCE",
    disposition: "Founder decision required before normalization",
    statement:
      "Legacy Founder working drafts define competing authority levels, identifiers, domain names, and folder mappings.",
    observedDocuments: [
      "knowledge-repository/00-enterprise/MR-DP-000-REPUBLIC-DEVELOPMENT-ARCHITECTURE-v0.2.md",
      "knowledge-repository/00-enterprise/MR-DP-002-REPOSITORY-AUTHORITY-AND-DOCUMENT-CLASSIFICATION-STANDARD-v0.1.md",
      "knowledge-repository/00-enterprise/MR-EA-003-ENTERPRISE-DOMAIN-MAP-v0.1.md",
      "knowledge-repository/00-enterprise/MR-EA-004-ENTERPRISE-TRACEABILITY-ARCHITECTURE-v0.1.md",
    ],
  },
];

const evidence = {
  schemaVersion: 1,
  sprint: "MR-ARCH-001-ENG-01",
  baselineCommit,
  scope: {
    approvedArtefactCount: approvedArtefacts.length,
    legacyMarkdownCount: markdownPaths.length - approvedArtefacts.length,
  },
  summary: {
    blockingFailureCount: blockers.length,
    conditionCount: conditions.length,
    placementPassCount: artefactChecks.filter((check) => check.placementPass)
      .length,
    contentIntegrityPassCount: artefactChecks.filter(
      (check) => check.contentIntegrityPass,
    ).length,
    uniqueIdPassCount: artefactChecks.filter((check) => check.idUniquePass)
      .length,
    orphanPassCount: artefactChecks.filter((check) => check.orphanPass).length,
    missingMetadataFieldCount: missingMetadataCount,
    outcome: blockers.length === 0 ? "PASS_WITH_CONDITIONS" : "FAIL",
  },
  blockers,
  conditions,
  artefacts: artefactChecks,
};

const serializedEvidence = `${JSON.stringify(evidence, null, 2)}\n`;
const { output } = parseArguments();

if (output) {
  const outputPath = resolve(repositoryRoot, output);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, serializedEvidence);
}

process.stdout.write(serializedEvidence);
process.exitCode = blockers.length === 0 ? 0 : 1;
