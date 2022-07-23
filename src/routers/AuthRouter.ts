import { SignIn, SignUp } from "@controllers/AuthController";
import { signUpMiddleware } from "@middlewares/signUpMiddleware";
import { Router } from "express";

export class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const { router } = this;

    router.post("/signin", SignIn.signIn);
    router.post("/signup", signUpMiddleware, SignUp.signUp);
  }
}
