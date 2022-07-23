import { ISignUp } from "@schemas/types/AuthInterface";
import Joi from "joi";

const AuthSchema = Joi.object<ISignUp>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});

export { AuthSchema };
