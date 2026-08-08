import test from "node:test";
import assert from "node:assert/strict";
import { VoipBotClient } from "../src/client.js";

test("creates a mock call without contacting a provider", async () => {
  const client = new VoipBotClient();
  const call = await client.calls.create({
    destination: "+15550000000",
    workflow: "demo"
  });

  assert.equal(call.mode, "mock");
  assert.equal(call.status, "queued");
  assert.ok(call.id.startsWith("demo_"));
});

test("returns a deterministic demo keymap", async () => {
  const client = new VoipBotClient();
  const keymap = await client.keymap();

  assert.equal(keymap["1"], "connect-agent");
  assert.equal(keymap["9"], "end-call");
});
