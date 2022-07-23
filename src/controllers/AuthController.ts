import { Request, Response } from "express";

export class SignIn {
  static async signIn(req: Request, res: Response) {
    res.send("SignIn");
  }
}

export class SignUp {
  static async signUp(req: Request, res: Response) {
    res.send("signUp");
  }
}
