process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line AI Excuse for Breaking Production — make.fun program/v1.
// One line, 1-180 characters, written to /output/entry.txt with no
// trailing newline. Deterministic, no network, no randomness.

const LINE =
  "ok so at 2:47am, Marta from support still on the call, I pushed the checkout fix to prod not staging, tabs looked the same, sorry, nobody can pay now but refunds have gone quiet";

const chars = [...LINE].length;
if (chars < 1 || chars > 180 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
