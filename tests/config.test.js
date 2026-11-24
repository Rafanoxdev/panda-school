import { test } from "node:test";
import assert from "node:assert/strict";
import { APP_NAME, APP_TAGLINE } from "../app/js/config.js";

test("config define nome e frase do app", () => {
  assert.ok(APP_NAME.length > 0);
  assert.ok(APP_TAGLINE.length > 0);
});
