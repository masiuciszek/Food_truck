import { Response } from "express";

export class ErrorResponse extends Error {
  statusCode: number;

  value: string | undefined;
  code: number | undefined;
  kind: string | undefined;

  constructor(
    message: string,
    statusCode: number,
    value?: string,
    code?: number,
    kind?: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.value = value;
    this.code = code;
    this.kind = kind;
  }
}
export const handleErrors = (err: ErrorResponse, res: Response) => {
  const { statusCode, message } = err;
  res.status(500).json({
    status: "error",
    statusCode,
    message,
  });
};
