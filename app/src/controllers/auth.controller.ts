import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('login');
  },
);

export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.send('logout user');
  },
);

export const test = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.baseUrl);
    console.log(req.path);
    res.send('test');
  },
);
