import test from "node:test";
import assert from "node:assert/strict";
import { APP_NAME } from "../src/constants.js";

test("constants", () => {
  assert.ok(APP_NAME.length > 0);
});
