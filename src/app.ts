import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { AuthRouter } from "@routers/AuthRouter";
import { errorHandlerMiddleware } from "@middlewares/errorHandlerMiddlawere";

export class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.config();
    this.buildRouters();
  }

  private config(): void {
    const { app } = this;
    app.use(cors());
    app.use(express.json());
  }

  private buildRouters(): void {
    const { app } = this;

    app.use(new AuthRouter().router);
    app.use(errorHandlerMiddleware);
  }
}
