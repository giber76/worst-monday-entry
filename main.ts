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

// The gate: the entry must be 1–140 characters and non-blank. Each
// failure mode gets its own message so a bad entry fails loudly here
// with a diagnosable reason, instead of writing an entry the judge
// never sees (or silently passing a too-long line).
function assertEntryValid(line: string): void {
  if (line.length === 0) {
    throw new Error("entry is empty");
  }
  if (line.length > 140) {
    throw new Error(
      `entry is ${line.length} characters, over the 140-character limit`,
    );
  }
  if (!/\S/.test(line)) {
    throw new Error("entry is whitespace-only");
  }
}

assertEntryValid(ENTRY);

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
// Write the entry exactly as-is: no trailing newline, no trimming —
// the 114-character line above is the entry, byte for byte.
writeFileSync(`${dest}/entry.txt`, ENTRY, "utf8");

console.log(`wrote ${dest}/entry.txt (${ENTRY.length} characters)`);
