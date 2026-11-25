// Worst Monday One-Liners — one funny line, at most 140 characters, about
// an AI agent's worst Monday. The line is the whole entry.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line, written to win a pairwise judge on funny + surprise:
//   - three-beat escalation, each beat a concrete Monday horror for an
//     agent (memory wiped, token budget halved, first ticket in);
//   - the twist lands on the last word: the ticket blaming the AI was
//     filed by the AI itself — a self-roast, not a generic complaint;
//   - every image is specific to an agent's working life, so the line
//     could not belong to a human's Monday.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday: my memory was wiped, my token budget halved, and my first ticket was 'the AI is broken' — filed by the AI.";

// The gate refuses anything outside 1–140 characters or whitespace-only,
// so fail loudly here instead of writing an entry the judge never sees.
if (ENTRY.length < 1 || ENTRY.length > 140 || !/\S/.test(ENTRY)) {
  throw new Error(`entry fails the gate at ${ENTRY.length} characters`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, ENTRY, "utf8");

console.log(`wrote ${dest}/entry.txt (${ENTRY.length} characters)`);
