import helmet from "helmet";

export const security = helmet({
  contentSecurityPolicy: false
});
