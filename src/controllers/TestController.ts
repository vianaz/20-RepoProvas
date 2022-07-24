import { ITest } from "@schemas/types/TestInterface";
import { TestService } from "@services/TestService";
import { Request, Response } from "express";

export class TestController {
  static async insertTest(req: Request<ITest, ITest, ITest>, res: Response) {
    const { name, pdfUrl, category, teacher, discipline } = req.body;
    await TestService.insertTest(name, pdfUrl, category, teacher, discipline);

    res.sendStatus(201);
  }
}
