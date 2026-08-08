import os
import requests

BASE_URL = os.environ.get("VOIP_API_URL", "https://api.example.com")
API_KEY = os.environ.get("VOIP_API_KEY", "your_api_key_here")

headers = {"X-API-Key": API_KEY}

for path in [
    "/callpanel/api/balance",
    "/callpanel/api/calls",
    "/callpanel/api/keymap",
    "/callpanel/api/audio/list",
]:
    response = requests.get(BASE_URL + path, headers=headers, timeout=15)
    response.raise_for_status()
    print(path)
    print(response.json())
