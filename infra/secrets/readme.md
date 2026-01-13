# ⚙️ `infra/` — Infrastructure & DevOps

The `infra` directory contains **deployment, security, CI/CD, and environment configuration** for Weather SaaS.

---

## 📂 Structure

```
infra/
├── ci/          # GitHub Actions workflows
├── docker/      # Dockerfiles
├── secrets/     # Environment templates
└── monitoring/  # Observability configs
```

---

## 🚀 CI/CD

Automated pipelines handle:

* Linting
* Testing
* Docker builds
* Deployments

### Flow

```
Commit → GitHub Actions → Tests → Build → Deploy
```

---

## 🔐 Secrets Management

* No secrets committed
* Env templates provided
* CI injects secure values

Supported:

* GitHub Secrets
* Cloud secret managers

---

## 🐳 Docker & Deployment

* Multi-stage builds
* Production-ready images
* Docker Compose for local dev

---

## 📊 Monitoring & Logging

### Metrics

* API latency
* Error rates
* Provider uptime

### Logging

* JSON structured logs
* Request correlation IDs

---

## 🛡 Security

* Dependency scanning
* Security headers
* Rate limiting

---

## 👤 Maintainer

[https://github.com/SYOP200](https://github.com/SYOP200)
