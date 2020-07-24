import { Response, NextFunction } from "express";
import asyncHandler from "./asyncHandler";
import { AuthRequest } from "./authHandler";

const handleAdmin = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const isAdmin = req.user.role === "ADMIN";

    if (!isAdmin) {
      throw new Error("You are not the master");
    }

    next();
  },
);

export { handleAdmin };
