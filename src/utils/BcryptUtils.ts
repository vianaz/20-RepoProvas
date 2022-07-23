import bcrypt from "bcrypt";

export class BcryptUtils {
  static async encrypt(data: string): Promise<string> {
    return await bcrypt.hash(data, 10);
  }
  static async compare(password: string): Promise<boolean> {
    return await bcrypt.compare(password, "123456");
  }
}
