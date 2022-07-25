import { ISignUp } from "@schemas/types/AuthInterface";
import Joi from "joi";
import { ITest } from "../types/TestInterface";

const SignUpSchema = Joi.object<ISignUp>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});
const SignInSchema = Joi.object<ISignUp>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
const TestInsertSchema = Joi.object<ITest>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  category: Joi.string().required(),
  teacher: Joi.string().required(),
  discipline: Joi.string().required(),
});

export { SignUpSchema, SignInSchema, TestInsertSchema };
