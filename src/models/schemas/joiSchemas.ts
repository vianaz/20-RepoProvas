import { ISignUp } from "@schemas/types/AuthInterface";
import Joi from "joi";

const SignUpSchema = Joi.object<ISignUp>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});
const SignInSchema = Joi.object<ISignUp>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { SignUpSchema, SignInSchema };
