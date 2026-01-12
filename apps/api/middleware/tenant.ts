export function tenant(req, res, next) {
  const tenantId = req.headers["x-tenant-id"];
  if (!tenantId) return res.status(401).end();
  req.tenantId = tenantId;
  next();
}

