# 📱 `apps/` — Application Layer

The `apps` directory contains all **user-facing applications** for the Weather SaaS platform. Each app shares APIs, auth, and theming but targets a different runtime.

---

## 📂 Structure

```
apps/
├── api/        # Backend REST & WebSocket API
├── web/        # Web dashboard (admin + users)
└── mobile/     # iOS & Android app (Expo)
```

---

## 🧠 Responsibilities

* User authentication
* Weather data access
* UI rendering
* Real-time updates
* Billing & account access

---

## 🧩 apps/api

### Purpose

The API powers all clients.

**Key features:**

* REST endpoints
* WebSockets for live updates
* JWT authentication
* Rate limiting & security headers

### Data Flow

```
Client → API → Weather Providers → API → Client
```

---

## 🌐 apps/web

### Purpose

Browser-based dashboard for:

* End users
* Admins
* Billing owners

### Capabilities

* Forecast analytics
* Station maps
* Plugin management
* Billing & usage

---

## 📱 apps/mobile

### Purpose

Native mobile experience using Expo.

### Features

* GPS location tracking
* Offline caching
* Push notifications
* Background refresh

---

## 🔗 Shared Conventions

* All apps use the same auth tokens
* Shared API contracts
* Consistent theming

---

## 👤 Maintainer

[https://github.com/SYOP200](https://github.com/SYOP200)
