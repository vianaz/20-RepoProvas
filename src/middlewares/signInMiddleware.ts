import { SignInSchema } from "@/models/schemas/joiSchemas";
import { ErrorFactory } from "@factories/ErrorFactory";
import { Users } from "@prisma/client";
import { FindRepository } from "@repositories/FindRepository";
import { ISignIn } from "@schemas/types/AuthInterface";
import { BcryptUtils } from "@utils/BcryptUtils";
import { NextFunction, Request, Response } from "express";

// verificar caso onde não colocam nada no body

export const signInMiddleware = async (
  req: Request<ISignIn, ISignIn, ISignIn>,
  res: Response,
  next: NextFunction,
) => {
  const { error } = SignInSchema.validate(req.body);
  if (error) throw new ErrorFactory("error_format_invalid").error;

  const { email, password } = req.body;
  const userInfo = await FindRepository.findUnique<
    Users,
    Omit<ISignIn, "password">
  >("Users", {
    where: { email },
  });

  if (!userInfo) throw new ErrorFactory("error_email_not_found").error;

  const isCorrectPassword = await BcryptUtils.compare(
    password,
    userInfo.password,
  );

  if (!isCorrectPassword)
    throw new ErrorFactory("error_password_invalid").error;

  res.locals = { id: userInfo.id, email: userInfo.email };
  next();
};
