import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDirs = ["curriculum", "guides", "worksheets"];

async function collect(relativeDir) {
  const dirPath = path.join(root, relativeDir);
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const childRelative = path.posix.join(relativeDir.replaceAll("\\", "/"), entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collect(childRelative)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(childRelative);
    }
  }

  return files;
}

function inferKind(relativePath) {
  if (relativePath.startsWith("curriculum/00-")) {
    return "course-outline";
  }
  if (relativePath.startsWith("curriculum/")) {
    return "lesson";
  }
  if (relativePath.startsWith("guides/")) {
    return "guide";
  }
  return "worksheet";
}

function inferLanguage(relativePath) {
  return relativePath.endsWith(".zh-CN.md") ? "zh-CN" : "en";
}

function inferPairPath(relativePath) {
  if (relativePath.endsWith(".zh-CN.md")) {
    return relativePath.replace(".zh-CN.md", ".md");
  }
  return relativePath.replace(".md", ".zh-CN.md");
}

function extractTitle(text) {
  const line = text.split(/\r?\n/).find((value) => value.startsWith("# "));
  return line ? line.slice(2).trim() : "Untitled";
}

const resources = [];

for (const dir of contentDirs) {
  const files = await collect(dir);
  for (const relativePath of files) {
    const text = await fs.readFile(path.join(root, relativePath), "utf8");
    resources.push({
      path: relativePath,
      kind: inferKind(relativePath),
      language: inferLanguage(relativePath),
      title: extractTitle(text),
      pairPath: inferPairPath(relativePath)
    });
  }
}

resources.sort((a, b) => a.path.localeCompare(b.path));

const manifest = {
  project: "ai-literacy-for-kids",
  description: "Bilingual open-source AI literacy curriculum for children ages 7-12.",
  resourceCount: resources.length,
  resources
};

const outputPath = path.join(root, "docs", "resource-manifest.json");
await fs.writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Wrote ${manifest.resourceCount} resources to docs/resource-manifest.json`);
