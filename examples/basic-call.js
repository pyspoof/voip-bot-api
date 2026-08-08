import { VoipBotClient } from "../src/client.js";

const client = new VoipBotClient({ transport: "mock" });

const result = await client.calls.create({
  destination: "+15550000000",
  workflow: "demo-ivr"
});

console.log("Demo call:", result);
