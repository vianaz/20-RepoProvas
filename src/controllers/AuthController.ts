import { ISignIn, ISignUp } from "@schemas/types/AuthInterface";
import { AuthService } from "@services/AuthService";
import { Request, Response } from "express";

export class SignIn {
  static async signIn(req: Request<ISignIn, ISignIn, ISignIn>, res: Response) {
    res.sendStatus(200);
  }
}

export class SignUp {
  static async signUp(req: Request<ISignUp, ISignUp, ISignUp>, res: Response) {
    AuthService.insertUser(req.body);
    res.sendStatus(201);
  }
}
