export const CallStatus = Object.freeze([
  "queued",
  "ringing",
  "answered",
  "completed",
  "failed",
  "not_found"
]);

export const WebhookEvents = Object.freeze([
  "call.created",
  "call.ringing",
  "call.answered",
  "call.dtmf",
  "call.completed"
]);
