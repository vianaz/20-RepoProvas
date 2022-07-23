import { IError } from "@schemas/types/ErrorInterface";
import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(err.statusCode).send(err.message);
};
