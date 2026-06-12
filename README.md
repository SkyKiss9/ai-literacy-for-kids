# AI Literacy for Kids

[中文说明](README.zh-CN.md)

AI Literacy for Kids is an open-source bilingual curriculum and classroom toolkit for teaching children ages 7-12 how to use AI safely, critically, and responsibly.

This repository is designed for maintainers, teachers, parents, translators, and education volunteers who want practical materials instead of vague AI hype.

## Why This Repository Matters

Children are already encountering AI-generated answers, images, and study tools. Most available guidance is built for adults, developers, or enterprise users. This project focuses on the missing layer: age-appropriate public-interest materials that educators and families can reuse for real teaching.

The goal is not to make children dependent on AI. The goal is to teach them:

- what AI is and is not
- how to ask better questions
- how to check answers with evidence
- how to protect privacy
- how to use AI without replacing human judgment

## What Is Included

- An 8-lesson starter curriculum
- Teacher and parent guides
- A teacher starter pack for first classroom trials
- Child AI safety rules
- Printable worksheets
- A classroom trial feedback template
- Bilingual English and Simplified Chinese content
- Maintainer documentation, validation scripts, and CI checks
- GitHub Pages entry documents for teacher-facing navigation

## Repository Structure

```text
curriculum/   lesson plans and course outline
guides/       teacher, parent, safety, and feedback guides
worksheets/   printable reflection and safety activities
docs/         roadmap, Pages entry docs, pilot notes, generated manifest
scripts/      repository validation and manifest generation
.github/      CI workflow, issue templates, PR template
PROJECT.md    living maintainer state and next steps
```

## Current Milestone

The current milestone is a complete public starter kit that another educator can review and begin piloting:

- [x] Course outline
- [x] Eight lesson drafts
- [x] Teacher guide
- [x] Parent guide
- [x] Safety rules
- [x] Feedback template
- [x] Teacher starter pack
- [x] Lesson 1 teacher packet
- [x] Lesson 2 teacher packet
- [x] Lesson 3 teacher packet
- [x] Lesson 4 teacher packet
- [x] Lesson 5 teacher packet
- [x] Lesson 6 teacher packet
- [x] English and Chinese source files
- [x] Repository validation and CI
- [x] GitHub Pages entry docs
- [ ] Classroom pilot feedback from real use

## How To Use

### For teachers

1. Read [guides/teacher-starter-pack.md](guides/teacher-starter-pack.md).
2. Start with [curriculum/00-course-outline.md](curriculum/00-course-outline.md).
3. If starting from Lesson 1, use [guides/lesson-01-teacher-packet.md](guides/lesson-01-teacher-packet.md).
4. If starting from Lesson 2, use [guides/lesson-02-teacher-packet.md](guides/lesson-02-teacher-packet.md).
5. Use the Pages entry layer at [docs/index.md](docs/index.md) for a simpler teacher-facing navigation view.
6. Validate readiness with [docs/pilot-checklist.md](docs/pilot-checklist.md).
7. Capture what worked with [guides/classroom-trial-feedback-template.md](guides/classroom-trial-feedback-template.md).

### For parents

1. Read [guides/parent-guide.md](guides/parent-guide.md).
2. Pick one short activity from the curriculum.
3. Use one shared device and avoid private information.
4. Talk about where AI may be wrong.

### For contributors

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution flow, translation rules, and safety review expectations.

### For maintainers

Use [PROJECT.md](PROJECT.md) as the single living handoff file. Use `git` history for detailed change tracking. Store real-world testing evidence under [docs/pilot-notes/README.md](docs/pilot-notes/README.md).

## Maintenance Workflow

This repository treats child safety and content quality as first-class maintenance work.

Before opening a pull request:

1. Run `node scripts/check-repo.mjs`
2. Run `node scripts/build-resource-manifest.mjs`
3. Confirm new content is age-appropriate and does not normalize unsafe AI use
4. Keep English and Chinese resource pairs aligned when possible

The CI workflow repeats these checks on every push and pull request.

## Roadmap

See [docs/roadmap.md](docs/roadmap.md) for planned milestones, maintainer priorities, and the evidence this project aims to gather from classroom and family use.

## Public-Interest Open Source Positioning

This repository is intentionally public and reusable. It is not a private teaching notebook. The project is meant to become maintainable educational infrastructure that others can translate, adapt, review, and improve.

That means the maintenance work includes:

- reviewing safety-sensitive wording
- triaging educator feedback
- improving lesson clarity
- tracking bilingual consistency
- preparing pilot-ready materials

## Contributing

Contributions are welcome from:

- teachers
- parents
- translators
- curriculum designers
- child-safety reviewers
- open-source contributors who care about education

Start with [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The educational text in this repository is licensed under Creative Commons Attribution 4.0 International. Code and tooling in `scripts/` are licensed under MIT. See [LICENSE.md](LICENSE.md).
