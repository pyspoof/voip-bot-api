const event = {
  id: "evt_demo_001",
  type: "call.dtmf",
  timestamp: new Date().toISOString(),
  data: {
    callId: "demo_call_001",
    digit: "1"
  }
};

console.log(JSON.stringify(event, null, 2));
