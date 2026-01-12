CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  tenant TEXT,
  plan TEXT
);

CREATE TABLE usage (
  tenant TEXT,
  calls INT,
  month TEXT
);

CREATE TABLE plugins (
  id TEXT PRIMARY KEY,
  name TEXT,
  enabled BOOLEAN
);
