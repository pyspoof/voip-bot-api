import { MockTransport } from "./mock-transport.js";

export class VoipBotClient {
  constructor({ transport = "mock" } = {}) {
    if (transport !== "mock") {
      throw new Error("This public reference build only exposes the mock transport.");
    }
    this.transport = new MockTransport();
    this.calls = {
      create: (payload) => this.transport.createCall(payload),
      get: (id) => this.transport.getCall(id)
    };
  }

  async keymap() {
    return this.transport.keymap();
  }

  async balance() {
    return this.transport.balance();
  }
}
