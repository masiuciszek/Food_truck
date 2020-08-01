import { Response, NextFunction } from "express";
import asyncHandler from "./asyncHandler";
import { AuthRequest } from "./authHandler";

const handleAdmin = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const isAdmin = req.user.role === "ADMIN";
    const isMaster = req.user.role === "MASTER";

    if (!isAdmin) {
      throw new Error("You are no access to this route");
    }

    next();
  },
);

export { handleAdmin };
