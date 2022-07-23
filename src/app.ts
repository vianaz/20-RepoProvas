import express, { Application } from "express";
import "express-async-errors";
import cors from "cors";
import { AuthRouter } from "@routers/AuthRouter";

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
  }
}
