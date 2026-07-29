# API Contract & Endpoint Specifications

> **[🤖 AI AGENT INSTRUCTIONS - READ THIS FIRST]**
> This document defines the strict communication contract between the client (frontend/mobile) and the server (backend/API).
> 1. **No Hallucinated Endpoints:** Only create endpoints that directly serve the features outlined in the `3-PRD.md`.
> 2. **Strict Data Typing:** When generating code (e.g., Dart models, TypeScript DTOs), strictly follow the payload structures defined here. Do not add or guess fields.
> 3. **Consistency:** Ensure all endpoints follow RESTful naming conventions and utilize the defined Standard Response Formats.
> 4. **Clarification:** If the payload requires data that doesn't exist in the `5-ERD.md`, stop and alert the user about the missing database fields.

---

## 🌐 1. Global Configurations
*Rules applied to all endpoints unless specified otherwise.*

* **Base URL (Dev):** `http://localhost:3000/api/v1`
* **Base URL (Prod):** `https://api.yourdomain.com/v1`
* **Authentication:** All protected routes require a header: `Authorization: Bearer <JWT_TOKEN>`
* **Content-Type:** `application/json`

---

## 📦 2. Standard Response Formats
*To ensure parsing consistency (e.g., when creating interceptors or generic network handlers).*

### ✅ Success Response (2xx)
```json
{
  "status": "success",
  "message": "Optional success message",
  "data": { ... } // Varies per endpoint
}

```

### ❌ Error Response (4xx, 5xx)

```json
{
  "status": "error",
  "code": "ERROR_CODE_STRING",
  "message": "Human-readable error description",
  "details": { ... } // Optional validation errors
}

```

---

## 🛣 3. Endpoints Directory

### Endpoint: [Action Name, e.g., User Login]

* **Method:** `POST`
* **Path:** `/auth/login`
* **Auth Required:** `No`
* **Description:** [Brief description of what this endpoint does]

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}

```

**Success Response (200 OK):**

```json
{
  "status": "success",
  "data": {
    "token": "eyJhbGciOiJIUz...",
    "user": {
      "id": "uuid-string",
      "email": "user@example.com",
      "full_name": "John Doe"
    }
  }
}

```

**Expected Errors:**

* `400 Bad Request`: `INVALID_CREDENTIALS` (If email or password mismatch).
* `404 Not Found`: `USER_NOT_FOUND` (If email does not exist).

---

### Endpoint: [Action Name, e.g., Fetch List Data]

* **Method:** `GET`
* **Path:** `/items`
* **Auth Required:** `Yes`
* **Description:** [Fetches a paginated list of items]

**Query Parameters:**

* `page` (int) - Default: 1
* `limit` (int) - Default: 10
* `sort` (string) - 'asc' or 'desc'

**Success Response (200 OK):**

```json
{
  "status": "success",
  "data": {
    "items": [
      {
        "id": "item-uuid",
        "name": "Item Name"
      }
    ],
    "meta": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 45
    }
  }
}

```

**Expected Errors:**

* `401 Unauthorized`: `TOKEN_EXPIRED` or `TOKEN_MISSING`.

---

> **[🤖 AI AGENT INSTRUCTION - POST-COMPLETION]**
> Once all endpoints are documented and approved by the user, ask: *"The backend data contract is established. Should we map out the visual screen transitions in **7-USER-FLOW.md**, or define the design system in **8-UI-UX-GUIDELINES.md**?"*