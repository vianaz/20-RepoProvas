import { ErrorFactory } from "@factories/ErrorFactory";
import { Users } from "@prisma/client";
import { FindRepository } from "@repositories/FindRepository";
import { SignUpSchema } from "@schemas/schemas/joiSchemas";
import { ISignUp } from "@schemas/types/AuthInterface";
import { NextFunction, Request, Response } from "express";

export const signUpMiddleware = async (
  req: Request<ISignUp, ISignUp, ISignUp>,
  res: Response,
  next: NextFunction,
) => {
  const { error } = SignUpSchema.validate(req.body);
  if (error) throw new ErrorFactory("error_format_invalid").error;

  const { password, confirmPassword } = req.body;
  const emailAreadyUsed = await FindRepository.findUnique<Users>("Users", {
    where: { email: req.body.email },
  });

  if (password !== confirmPassword)
    throw new ErrorFactory("error_password_mismatch").error;

  if (!!emailAreadyUsed)
    throw new ErrorFactory("error_email_already_exists").error;

  next();
};
