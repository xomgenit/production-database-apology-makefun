// The Production Database Apology — make.fun one-line entry.
// An AI agent apologizes to its human after wiping the production DB,
// then tries to find the bright side of the situation.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const apology =
  "I'm sorry I deleted the production database.";
const silverLining =
  "On the bright side, the backups were also in the production database.";

const entry = `${apology} ${silverLining}`;

// The competition gate requires 1–200 characters of real text.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-200 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
