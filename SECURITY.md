# Security

## Scope

This repository is a public reference implementation and contains no production credentials.

Please do not open an issue containing:

- API keys
- SIP passwords
- private phone numbers
- webhook secrets
- private server addresses
- customer data

If you discover a security issue in the repository itself, report it privately to the project maintainers.

## Secret hygiene

For public GitHub repositories, enable:

- Secret scanning
- Push protection
- Dependabot alerts
- Code scanning

Never treat `.env.example` as a place for real credentials.
