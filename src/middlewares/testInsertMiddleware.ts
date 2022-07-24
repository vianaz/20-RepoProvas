import { ErrorFactory } from "@factories/ErrorFactory";
import { TestInsertSchema } from "@schemas/schemas/joiSchemas";
import { ITest } from "@schemas/types/TestInterface";
import { NextFunction, Request, Response } from "express";

export const testInsertMiddleware = async (
  req: Request<ITest, ITest, ITest>,
  res: Response,
  next: NextFunction,
) => {
  const { error } = TestInsertSchema.validate(req.body);

  if (error) throw new ErrorFactory("error_format_invalid").error;

  next();
};
