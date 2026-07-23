# Main Street Growth — Design Skills (always-on)

This project vendors three design skills under `.claude/skills/`. They are mandatory
whenever we create or review a web design in this project (client sites, landing pages,
redesigns). Do not ship UI work that has skipped them.

## The three skills
- **design-taste-frontend** ("taste") — sets design direction up front; kills the default
  LLM/templated look. Reads the brief, infers the read, locks the variance / motion /
  density dials, and writes a one-line design direction before any markup.
- **emil-design-eng** + **review-animations** (Emil Kowalski) — motion and component-polish
  philosophy for building, and a strict animation-review pass for QA. Supporting skills:
  `animation-vocabulary`, `improve-animations`, `find-animation-opportunities`,
  `apple-design`, `pick-ui-library`.
- **impeccable** — the enforcement layer. `/impeccable <command>` (shape, craft, audit,
  polish, colorize, typeset, animate, layout, …) plus 46 deterministic detector rules that
  flag AI-slop anti-patterns (overused fonts like Inter, gray text on colored backgrounds,
  pure-black tones, deep card nesting, dated bounce easing).

## Use them like this

### Creating a design
1. **Direction** — invoke `design-taste-frontend` first: infer the read, set the dials,
   state the one-line direction. Do this before writing markup.
2. **Craft & motion** — build with `emil-design-eng` for component polish and animation
   decisions; reach for `animation-vocabulary` when you need precise motion language, and
   `/impeccable shape` / `/impeccable craft` to raise the ambition of the composition.
3. Then proceed through the main-street-pipeline `build` stage as usual.

### Reviewing a design (before it passes the review gate / ships)
1. **`/impeccable audit`** then **`/impeccable polish`** — clear every detector finding.
2. **`review-animations`** — review all motion/transition code against Emil's craft bar.
3. Only mark the main-street-pipeline `review` gate PASS once both are clean.

## Automatic enforcement
`.claude/settings.json` registers an Impeccable hook: an immediate detector pass after every
Edit/Write/MultiEdit on UI files, and a deeper full-rule pass on Stop. It is self-guarding
(no-ops if the skill is absent) and needs **Node.js** available on PATH; the live/browser
checks additionally use Playwright.

## Provenance
Vendored from source repos on 2026-07-23: `pbakaus/impeccable`, `emilkowalski/skill`,
`nexu-io/open-design` (skill `taste-skill`). Update by re-pulling those repos.
