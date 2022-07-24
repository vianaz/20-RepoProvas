import prisma from "@db/database";
import { ErrorFactory } from "@factories/ErrorFactory";
import { Prisma, Tests } from "@prisma/client";
import { FindRepository } from "@repositories/FindRepository";
import { InsertRepository } from "@repositories/InsertRepository";

export class TestService {
  static async insertTest(
    name: string,
    pdfUrl: string,
    categoryName: string,
    teacherName: string,
    disciplineName: string,
  ) {
    const { id: categoryId } = await this.getDataIdByName(
      "Categories",
      categoryName,
    );
    const { id: teacherId } = await this.getDataIdByName(
      "Teachers",
      teacherName,
    );
    const { id: disciplineId } = await this.getDataIdByName(
      "Disciplines",
      disciplineName,
    );
    const { id: teacherDisciplineId } = await this.getTeacherDisciplineId(
      "TeacherDisciplines",
      teacherId,
      disciplineId,
    );
    const formatInsertData: Omit<Tests, "id"> = {
      name,
      pdfUrl,
      categoryId,
      teacherDisciplineId,
    };

    await InsertRepository.insert("Tests", formatInsertData);
  }
  private static async getDataIdByName(table: Prisma.ModelName, name: string) {
    const data = (await FindRepository.findUnique(table, {
      where: { name },
    })) as any;

    if (!data) {
      throw new ErrorFactory("error_category_not_found").error;
    }

    return { id: data.id };
  }
  private static async getTeacherDisciplineId(
    table: Prisma.ModelName,
    teacherId: number,
    disciplineId: number,
  ) {
    const data = (await FindRepository.findUnique(table, {
      where: { teacherId, disciplineId },
    })) as any;

    if (!data) {
      throw new ErrorFactory("error_category_not_found").error;
    }

    return { id: data.id };
  }
}
