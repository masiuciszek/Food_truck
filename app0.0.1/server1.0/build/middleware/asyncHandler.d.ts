import { NextFunction, Request, Response } from 'express';
declare function asyncHandler(fn: Function): (req: Request, res: Response, next: NextFunction) => void;
export default asyncHandler;
