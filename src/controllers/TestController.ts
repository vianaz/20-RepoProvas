import { ITest } from "@schemas/types/TestInterface";
import {
  GetByTeacherService,
  GetByTermsService,
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
  static async getByTerms(req: Request, res: Response) {
    const byTermsResultQuery = await GetByTermsService.getByTerms();
    res.send(byTermsResultQuery);
  }
  static async getByTeacher(req: Request, res: Response) {
    const byTeacherResultQuery = await GetByTeacherService.getByTeacher();
    res.send(byTeacherResultQuery);
  }
}
