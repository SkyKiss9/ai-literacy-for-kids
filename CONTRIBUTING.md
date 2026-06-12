# Contributing

Thank you for helping improve public-interest AI literacy materials for children.

## What We Need Help With

Useful contributions include:

- improving lesson clarity
- translating English and Chinese materials
- adding classroom activities
- reviewing wording for child safety risks
- sharing educator or parent feedback
- fixing broken links, file mismatches, or repository structure issues

## Contribution Principles

All content should be:

- age-appropriate for children ages 7-12
- usable by non-technical adults
- honest about AI limitations
- careful with privacy and safety
- respectful of different classroom, family, and cultural contexts

## Things We Do Not Accept

Do not add content that:

- encourages children to share private information
- presents AI as always correct
- replaces parent, teacher, or caregiver judgment
- offers medical, legal, financial, or mental-health advice for children
- normalizes unsafe unsupervised AI use
- encourages plagiarism or copy-paste learning

## Repository Workflow

1. Make your change in the relevant English or Chinese source file.
2. Run `node scripts/check-repo.mjs`.
3. Run `node scripts/build-resource-manifest.mjs`.
4. If you changed only one language, note the missing translation follow-up in the PR.
5. Open a pull request using the repository template.

## Translation Rules

- Keep file pairs aligned where possible.
- Prefer plain, direct language over literal translation.
- If a concept does not translate naturally, preserve the teaching intent rather than the exact sentence shape.
- Flag culturally sensitive wording for review instead of guessing.

## Safety Review Expectations

Changes in these areas should receive extra review:

- privacy examples
- child safety rules
- prompts shown to children
- parent/teacher supervision guidance
- claims about what AI can reliably do

## Pull Request Checklist

Please include:

- what changed
- who the change helps
- whether the change affects English, Chinese, or both
- whether the change has child-safety implications
- any follow-up needed before classroom use
