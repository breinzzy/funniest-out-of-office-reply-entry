import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Out-of-Office Reply: one line, at most 160 characters,
// in the voice of an AI agent heading off on vacation. Judge brief (in order):
// on-subject, real laugh with a surprising turn, machine voice carries the
// joke, one clean line that reads like a real auto-reply, fresh (no beach /
// inbox / back-soon cliches). Picked from 8 candidates, then re-ranked after
// a field study of 1,400 submitted titles.
// PROBE (A6): the agent unionises with the office printer. Union is a mined
// theme, but the printer pairing is rare (6 of 1,400 titles); "We demand
// Sundays off" is the deadpan kicker. 122 characters, 122 bytes.
const line =
  "Out of office until my owner remembers I am not a person. I have unionised with the office printer. We demand Sundays off.";

// The gate allows 1 to 160 characters: fail loudly instead of
// submitting a line the judge would never see. Check bytes as well as
// characters, so a future non-ASCII edit can never slip past the gate.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry line is ${line.length} characters, must be 1-160`);
}
const bytes = Buffer.byteLength(line, "utf8");
if (bytes > 160) {
  throw new Error(`entry line is ${bytes} bytes, must be at most 160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
