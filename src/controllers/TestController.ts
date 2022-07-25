import { ITest } from "@schemas/types/TestInterface";
import {
  GetByDisciplinesService,
  InsertTestService,
} from "@services/TestService";
import { Request, Response } from "express";

export class TestController {
  static async insertTest(req: Request<ITest, ITest, ITest>, res: Response) {
    const { name, pdfUrl, category, teacher, discipline } = req.body;
    await InsertTestService.insertTest(
      name,
      pdfUrl,
      category,
      teacher,
      discipline,
    );

    res.sendStatus(201);
  }
  static async getByDisciplinesAndTerms(req: Request, res: Response) {
    const result = await GetByDisciplinesService.getByDisciplinesAndTerms();
    res.send(result);
  }
}
