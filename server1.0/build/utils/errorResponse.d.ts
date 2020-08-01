import { Response } from 'express';
export declare class ErrorResponse extends Error {
    statusCode: number;
    value: string | undefined;
    code: number | undefined;
    constructor(message: string, statusCode: number, value?: string, code?: number);
}
export declare const handleErrors: (err: ErrorResponse, res: Response) => void;
