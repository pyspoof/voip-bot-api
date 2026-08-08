# Architecture

The public project intentionally uses a layered model.

```text
Application
   │
   ▼
Client / SDK
   │
   ├── Calls
   ├── Keymaps
   ├── Events
   └── Usage
   │
   ▼
Transport
   │
   └── Mock transport in this repository
```

## Public layer

The public layer documents stable concepts that are useful to developers:

- call creation
- call lookup
- DTMF actions
- event payloads
- usage-style responses

## Private layer

A production deployment can implement its own transport behind the same conceptual interface.

Production-only concerns should stay outside this repository:

- carrier credentials
- SIP authentication
- trunk configuration
- internal hostnames
- private service URLs
- billing internals
- database credentials
- operational dashboards

This makes the repository useful as a developer reference without turning it into an infrastructure dump.
