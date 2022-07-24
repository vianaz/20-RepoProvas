import { TestController } from "@controllers/TestController";
import { testInsertMiddleware } from "@middlewares/testInsertMiddleware";
import { tokenMiddleware } from "@middlewares/tokenMiddleware";
import { Router } from "express";

export class TestRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const { router } = this;

    router.use(tokenMiddleware);
    router.post("/test", testInsertMiddleware, TestController.insertTest);
    router.get("/test/disciplines", TestController.getByDisciplinesAndTerms);
  }
}
