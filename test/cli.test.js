import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, "..", "src", "cli.js");

test("cli cumprimenta", () => {
  const r = spawnSync(process.execPath, [cli, "node"], { encoding: "utf-8" });
  assert.equal(r.status, 0);
  assert.match(r.stdout, /node/i);
});
