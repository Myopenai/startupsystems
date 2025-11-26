# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public issue
2. Email security details to: [security@example.com]
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Best Practices

### Environment Variables
- Never commit `.dev.vars` or `.env` files
- Use Cloudflare Secrets for sensitive data
- Rotate API tokens regularly

### API Security
- Use HTTPS only
- Implement rate limiting
- Validate all inputs
- Use CORS appropriately

### Dependencies
- Keep dependencies up to date
- Run `npm audit` regularly
- Review security advisories

## Security Features

- ✅ CORS configuration
- ✅ Environment variable isolation
- ✅ Input validation
- ✅ Error handling without data leaks
- ✅ Secure headers

## Updates

Security updates will be released as patch versions (1.0.x).

