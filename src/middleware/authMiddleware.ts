import { Request, Response, NextFunction } from "express";

interface RequestWithUser extends Request {
  user?: any; // Define more specifically if possible.
}

const authMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No token, authorization denied" });
    return;
  }

  try {
    // Assume token verification logic here
    req.user = { id: "123", name: "John Doe" }; // Example user object
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
