import { VoipBotClient } from "../src/client.js";

const client = new VoipBotClient();

const keymap = await client.keymap();

for (const [key, action] of Object.entries(keymap)) {
  console.log(`${key} -> ${action}`);
}
