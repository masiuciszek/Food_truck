import { Response } from "express";

type FnVoid = () => void;
type FnString = () => void;

type Fns = FnVoid | FnString;

interface ResponseData<T> {
  statusCode: number;
  isSuccess: boolean;
  msg: string;
  data: T;
}

const handleResponse = <T>(res: Response, responseData: ResponseData<T>) => {
  res.status(200).json(responseData);
};

function jsonResponse<T>(
  res: Response,
  statusCode: number,
  isSuccess: boolean,
  msg: string,
  data: T,
) {
  res.status(statusCode).json({ success: isSuccess, msg: msg, data });
}

export { jsonResponse };
