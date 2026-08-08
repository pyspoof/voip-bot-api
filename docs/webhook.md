# Webhooks

Webhooks allow an application to react to call lifecycle events.

Example event:

```json
{
  "id": "evt_demo_001",
  "type": "call.completed",
  "timestamp": "2026-08-08T12:00:00Z",
  "data": {
    "callId": "call_demo_123",
    "status": "completed",
    "duration": 18
  }
}
```

## Recommended handling

1. Validate the webhook signature when signatures are enabled.
2. Parse the event type.
3. Process the event idempotently.
4. Return a successful HTTP response quickly.
5. Queue long-running work separately.

Do not log authentication headers or webhook secrets.
