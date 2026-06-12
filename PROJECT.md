# PROJECT.md

This is the single living maintainer handoff file for this repository.

Use `git` history for detailed diffs and commit-by-commit changes.
Do not create one summary file per chat or per session.

## Project Goal

Build a publicly reusable, child-safe, bilingual AI literacy curriculum for children ages 7-12 that teachers, parents, and community educators can actually pilot.

## Current State

The repository already has:

- an 8-lesson starter curriculum
- teacher and parent guides
- child AI safety guidance
- printable worksheet starter content
- contribution, conduct, and security docs
- validation scripts and CI
- a teacher starter pack
- lesson 1 and lesson 2 teacher packets
- lesson 3 and lesson 4 teacher packets
- lesson 5 and lesson 6 teacher packets
- a pilot checklist
- Pages entry documents

The biggest remaining gap is not repository structure. It is real-world pilot evidence and classroom-ready resource packaging.

## Working Rules

1. `PROJECT.md` is the only living handoff file at repo root.
2. `git log` is the detailed history.
3. `docs/pilot-notes/` is for real classroom, family, or workshop evidence.
4. Keep English and Chinese materials paired where practical.
5. Run `npm.cmd run verify` before calling structural work done.

## Key Commands

```powershell
npm.cmd run verify
git status --short
git log --oneline -5
```

## Recent Progress

- Public repo structure established
- GitHub Actions CI added
- Open-source maintainer application support materials added
- Teacher starter pack and pilot checklist added
- Chinese README encoding issue fixed

## Next High-Value Work

1. Replace the sample pilot note with real classroom or family evidence
2. Add classroom timing and revision notes after real use
3. Expand packet and worksheet resources for Lesson 7 and Lesson 8
4. Prepare downloadable teacher packet exports

## Risks

- No real pilot evidence yet
- Printable resource layer is still thin
- Chinese content should keep being spot-checked for encoding and readability on Windows
