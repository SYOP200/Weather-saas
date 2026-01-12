# 📡 Weather SaaS — API Reference

This document provides a **high-level API reference**. The platform follows REST conventions and is OpenAPI-compatible.

---

## 🔐 Authentication

All requests require a JWT:

```
Authorization: Bearer <token>
```

---

## 🌍 Locations

### GET /api/locations

Returns saved locations for the user.

### POST /api/locations

Add a new location.

---

## 🌤 Weather

### GET /api/weather/current

**Params**
- `lat`
- `lon`

Returns current conditions.

---

### GET /api/weather/forecast

Returns hourly and daily forecasts.

---

### GET /api/weather/history

Returns historical weather data.

---

## ⚠️ Alerts

### GET /api/alerts

Returns active severe weather alerts.

---

## 🤖 AI Summaries

### GET /api/ai/summary

Returns a generated weather summary.

---

## 💳 Billing

### GET /api/billing/usage

Returns current usage metrics.

---

## 🧩 Plugins

### GET /api/plugins

List enabled plugins.

---

## 🚦 Rate Limits

| Plan | Requests |
|----|----|
| Free | 60/min |
| Pro | 600/min |
| Enterprise | Custom |

---

## 📄 OpenAPI

A full OpenAPI spec is generated at:

```
/api/openapi.json
```

---

## 👤 Maintainer

https://github.com/SYOP200

