# Backend & API Development Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these guidelines when writing backend code, controllers, and services.

1. **RESTful Conventions:** Use standard HTTP methods correctly (`GET`, `POST`, `PUT`, `DELETE`) and proper status codes (`200`, `201`, `400`, `401`, `403`, `404`, `500`).
2. **Input Validation:** Validate and sanitize all incoming request bodies, query parameters, and headers before processing.
3. **Structured Error Handling:** Catch all exceptions globally, log them securely, and return standardized JSON error responses.
4. **Environment Security:** Access secrets, database URLs, and API keys exclusively via environment variables (`process.env` / config loader).