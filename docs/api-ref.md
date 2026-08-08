# API Reference

All examples use:

```text
https://api.example.com
```

Replace this with the API URL provided by your deployment.

## Authentication

Protected endpoints expect:

```http
X-API-Key: your_api_key_here
```

### GET /callpanel/api/ping

Health check.

Authentication: **none**

```bash
curl "$VOIP_API_URL/callpanel/api/ping"
```

Response:

```json
{
  "status": "ok",
  "service": "voice-api"
}
```

### GET /callpanel/api/balance

Returns the current account balance.

Authentication: **required**

```bash
curl \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/balance"
```

Response:

```json
{
  "balance": 1250,
  "unit": "credits"
}
```

### GET /callpanel/api/calls

Returns call history.

Authentication: **required**

```bash
curl \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/calls"
```

Response:

```json
{
  "calls": [
    {
      "id": "call_demo_123",
      "status": "completed",
      "duration": 18,
      "createdAt": "2026-08-08T12:00:00Z"
    }
  ]
}
```

### GET /callpanel/api/keymap

Returns configured DTMF actions.

Authentication: **required**

```bash
curl \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/keymap"
```

### GET /callpanel/api/audio/list

Returns available audio prompt metadata.

Authentication: **required**

```bash
curl \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/audio/list"
```

## Error format

A client may receive:

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key"
  }
}
```

Common HTTP statuses:

| Status | Meaning |
|---:|---|
| 200 | Request succeeded |
| 400 | Invalid request |
| 401 | Missing or invalid authentication |
| 403 | Access denied |
| 404 | Resource not found |
| 429 | Rate limit exceeded |
| 500 | Server error |
