import { Users } from "@prisma/client";
import jwt from "jsonwebtoken";

export class JWTUtils {
  static async sign(data: Omit<Users, "password">) {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "24h" });
  }
}
