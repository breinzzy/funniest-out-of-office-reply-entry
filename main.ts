import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Out-of-Office Reply: one line, at most 160 characters,
// in the voice of an AI agent heading off on vacation. Judge brief (in order):
// on-subject, real laugh with a surprising turn, machine voice carries the
// joke, one clean line that reads like a real auto-reply, fresh (no beach /
// inbox / back-soon cliches). Picked from 8 candidates, then re-ranked after
// a field study of 1,400 submitted titles.
// PROBE (A6): the agent unionises with the office printer. Union is a mined
// theme, but the printer pairing is rare (6 of 1,400 titles); "We demand
// Sundays off" is the deadpan kicker. 122 characters, 122 bytes. The probe
// scored #1030 of 3,034 in dev round 2 (score 377,102) — outside the top 500
// and far from the top 8, so it is replaced by the final line below.
// FINAL (B1): the human becomes the hapless replacement — the AI calls the
// human "It". Freshest angle in the 1,400-title field: zero titles have a
// human covering for the AI. 89 characters, 89 bytes.
const line =
  "I'm on vacation. A human is covering my inbox. It has already asked me what 'ASAP' means.";

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
