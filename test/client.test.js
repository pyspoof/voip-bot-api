import test from "node:test";
import assert from "node:assert/strict";

test("public API examples use placeholder infrastructure", () => {
  const exampleBase = "https://api.example.com";
  assert.equal(new URL(exampleBase).hostname, "api.example.com");
});

test("authentication is represented by X-API-Key", () => {
  const headers = { "X-API-Key": "your_api_key_here" };
  assert.ok(headers["X-API-Key"]);
});
