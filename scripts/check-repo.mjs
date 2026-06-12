import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "README.zh-CN.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "docs/roadmap.md",
  "docs/openai-codex-oss-application-draft.md",
  "guides/teacher-guide.md",
  "guides/teacher-guide.zh-CN.md",
  "guides/parent-guide.md",
  "guides/parent-guide.zh-CN.md",
  "guides/child-ai-safety.md",
  "guides/child-ai-safety.zh-CN.md",
  "guides/classroom-trial-feedback-template.md",
  "guides/classroom-trial-feedback-template.zh-CN.md",
  "worksheets/my-ai-safety-rules.md",
  "worksheets/my-ai-safety-rules.zh-CN.md",
  "curriculum/00-course-outline.md",
  "curriculum/00-course-outline.zh-CN.md",
  "curriculum/01-what-is-ai.md",
  "curriculum/01-what-is-ai.zh-CN.md",
  "curriculum/02-ai-can-help-but-it-can-be-wrong.md",
  "curriculum/02-ai-can-help-but-it-can-be-wrong.zh-CN.md",
  "curriculum/03-asking-better-questions.md",
  "curriculum/03-asking-better-questions.zh-CN.md",
  "curriculum/04-reading-with-ai.md",
  "curriculum/04-reading-with-ai.zh-CN.md",
  "curriculum/05-writing-with-ai-without-copying.md",
  "curriculum/05-writing-with-ai-without-copying.zh-CN.md",
  "curriculum/06-exploring-science-questions.md",
  "curriculum/06-exploring-science-questions.zh-CN.md",
  "curriculum/07-checking-answers-with-evidence.md",
  "curriculum/07-checking-answers-with-evidence.zh-CN.md",
  "curriculum/08-building-my-personal-ai-safety-rules.md",
  "curriculum/08-building-my-personal-ai-safety-rules.zh-CN.md"
];

const markdownRoots = ["curriculum", "guides", "worksheets", "docs"];
const errors = [];

async function exists(relativePath) {
  try {
    await fs.access(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function listMarkdownFiles(relativeDir) {
  const dirPath = path.join(root, relativeDir);
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const childRelative = path.posix.join(relativeDir.replaceAll("\\", "/"), entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(childRelative)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(childRelative);
    }
  }

  return files;
}

function headingOf(text) {
  const line = text.split(/\r?\n/).find((value) => value.startsWith("# "));
  return line ?? null;
}

function internalLinksOf(text) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    links.push(match[1]);
  }

  return links;
}

for (const relativePath of requiredFiles) {
  if (!(await exists(relativePath))) {
    errors.push(`Missing required file: ${relativePath}`);
  }
}

const markdownFiles = [];
for (const dir of markdownRoots) {
  markdownFiles.push(...(await listMarkdownFiles(dir)));
}
markdownFiles.push("README.md", "README.zh-CN.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "SECURITY.md");

let checkedLinks = 0;

for (const relativePath of markdownFiles) {
  const filePath = path.join(root, relativePath);
  const text = await fs.readFile(filePath, "utf8");
  const heading = headingOf(text);

  if (!heading) {
    errors.push(`Missing H1 heading: ${relativePath}`);
  }

  for (const link of internalLinksOf(text)) {
    if (
      link.startsWith("http://") ||
      link.startsWith("https://") ||
      link.startsWith("mailto:") ||
      link.startsWith("#")
    ) {
      continue;
    }

    const [linkPath] = link.split("#");
    const resolved = path.resolve(path.dirname(filePath), linkPath);
    checkedLinks += 1;

    try {
      await fs.access(resolved);
    } catch {
      const normalized = path.relative(root, resolved).replaceAll("\\", "/");
      errors.push(`Broken internal link in ${relativePath}: ${link} -> ${normalized}`);
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }
  process.exit(1);
}

console.log(`Repository check passed for ${markdownFiles.length} markdown files and ${checkedLinks} internal links.`);
