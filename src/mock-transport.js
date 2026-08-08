import crypto from "node:crypto";

export class MockTransport {
  constructor() {
    this.calls = new Map();
  }

  async createCall(payload) {
    const id = `demo_${crypto.randomUUID()}`;
    const call = {
      id,
      status: "queued",
      destination: payload.destination,
      workflow: payload.workflow ?? "default",
      mode: "mock",
      createdAt: new Date().toISOString()
    };
    this.calls.set(id, call);
    return call;
  }

  async getCall(id) {
    return this.calls.get(id) ?? {
      id,
      status: "not_found",
      mode: "mock"
    };
  }

  async keymap() {
    return {
      "1": "connect-agent",
      "2": "repeat-menu",
      "3": "play-hours",
      "9": "end-call"
    };
  }

  async balance() {
    return {
      mode: "mock",
      credits: 1000,
      unit: "demo"
    };
  }
}
