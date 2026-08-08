import http from "node:http";

const port = Number(process.env.PORT || 8787);

const json = (res, status, body) => {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(body, null, 2));
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/callpanel/api/ping") {
    return json(res, 200, { status: "ok", service: "voice-api", mode: "mock" });
  }

  if (!req.headers["x-api-key"]) {
    return json(res, 401, {
      error: { code: "unauthorized", message: "Missing API key" }
    });
  }

  if (url.pathname === "/callpanel/api/balance") {
    return json(res, 200, { balance: 1250, unit: "credits", mode: "mock" });
  }

  if (url.pathname === "/callpanel/api/calls") {
    return json(res, 200, {
      calls: [
        {
          id: "call_demo_123",
          status: "completed",
          duration: 18,
          createdAt: "2026-08-08T12:00:00Z"
        }
      ],
      mode: "mock"
    });
  }

  if (url.pathname === "/callpanel/api/keymap") {
    return json(res, 200, {
      "1": "connect-agent",
      "2": "repeat-menu",
      "3": "play-hours",
      "9": "end-call"
    });
  }

  if (url.pathname === "/callpanel/api/audio/list") {
    return json(res, 200, {
      audio: [
        { id: "welcome_demo", name: "Welcome", format: "gsm" }
      ]
    });
  }

  return json(res, 404, {
    error: { code: "not_found", message: "Route not found" }
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Mock API listening at http://127.0.0.1:${port}`);
});
