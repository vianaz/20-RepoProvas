import { JWTUtils } from "@/utils/JWTUtils";
import { Users } from "@prisma/client";

import { InsertRepository } from "@repositories/InsertRepository";
import { ISignUp } from "@schemas/types/AuthInterface";
import { BcryptUtils } from "@utils/BcryptUtils";

export class AuthService {
  static async insertUser(data: Omit<ISignUp, "confirmPassword">) {
    const { email, password } = data;
    const hashedPassword = await BcryptUtils.encrypt(password);
    return await InsertRepository.insert<Users>("Users", {
      email,
      password: hashedPassword,
    });
  }

  static async login(data: Omit<Users, "password">) {
    return JWTUtils.sign(data);
  }
}
