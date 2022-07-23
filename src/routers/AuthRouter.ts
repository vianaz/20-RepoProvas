import { SignIn, SignUp } from "@controllers/AuthController";
import { Router } from "express";

export class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const { router } = this;

    router.post("/signIn", SignIn.signIn);
    router.post("/signUp", SignUp.signUp);
  }
}
