import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export function signToken(user: any) {
  return jwt.sign(user, SECRET, { expiresIn: "7d" });
}

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}
