#!/usr/bin/env bash
set -e

: "${VOIP_API_URL:=https://api.example.com}"
: "${VOIP_API_KEY:=your_api_key_here}"

echo "== Ping =="
curl -s "$VOIP_API_URL/callpanel/api/ping"
echo

echo "== Balance =="
curl -s \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/balance"
echo

echo "== Calls =="
curl -s \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/calls"
echo

echo "== Keymap =="
curl -s \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/keymap"
echo

echo "== Audio =="
curl -s \
  -H "X-API-Key: $VOIP_API_KEY" \
  "$VOIP_API_URL/callpanel/api/audio/list"
echo
