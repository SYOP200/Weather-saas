# 📦 `packages/` — Shared Libraries

The `packages` directory contains **shared code** used across all applications.

---

## 📂 Structure

```
packages/
├── ui/        # Shared UI components
├── config/    # Shared configuration
├── types/     # Type definitions
└── utils/     # Utilities & helpers
```

---

## 🧠 Purpose

Shared packages ensure:

* Consistent behavior
* Reduced duplication
* Faster development

---

## 🎨 UI Package

Used by:

* Web dashboard
* Mobile app

Includes:

* Buttons
* Cards
* Charts
* Theme tokens

---

## ⚙️ Config Package

Centralized:

* API URLs
* Feature flags
* Environment detection

---

## 🧾 Types Package

* Shared TypeScript types
* API contracts
* Plugin interfaces

---

## 🔧 Utils Package

* Date formatting
* Weather conversions
* Caching helpers

---

## 🔄 Dependency Graph

```
packages → apps
```

Apps may depend on packages, but packages never depend on apps.

---

## 👤 Maintainer

[https://github.com/SYOP200](https://github.com/SYOP200)
