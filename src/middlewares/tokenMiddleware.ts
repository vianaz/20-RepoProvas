import { ErrorFactory } from "@factories/ErrorFactory";
import { JWTUtils } from "@utils/JWTUtils";
import { NextFunction, Request, Response } from "express";

export const tokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  
  const token = (
    (req.headers["x-access-token"] as string) ||
    (req.headers["authorization"] as string)
  )?.split(" ")[1];

  if (!token) throw new ErrorFactory("error_without_token").error;

  const isCorrectToken = await JWTUtils.verify(token);

  if (!isCorrectToken) throw new ErrorFactory("error_token_invalid").error;
  next();
};
