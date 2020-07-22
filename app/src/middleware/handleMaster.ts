import { Request, Response, NextFunction } from 'express';
import asyncHandler from './asyncHandler';
import { AuthRequest } from './authHandler';

const handleMaster = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const isMaster = req.user.role === 'MASTER';

    if (!isMaster) {
      throw new Error('You are not the master');
    }

    next();
  },
);

export { handleMaster };
