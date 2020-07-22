import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';
export declare const errorHandler: (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => void;
