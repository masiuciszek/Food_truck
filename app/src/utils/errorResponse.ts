import { Response } from 'express';

export class ErrorResponse extends Error {
  statusCode: number;

  value: string | undefined;
  code: number | undefined;

  constructor(
    message: string,
    statusCode: number,
    value?: string,
    code?: number,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.value = value;
    this.code = code;
  }
}

export const handleErrors = (err: ErrorResponse, res: Response) => {
  const { statusCode, message } = err;
  res.status(500).json({
    status: 'error',
    statusCode,
    message,
  });
};
