import prisma from "@db/database";
import { QueryFactory } from "@factories/QueryFactory";
import { Prisma } from "@prisma/client";
prisma.disciplines.groupBy({ by: ["name"], orderBy: {} });
export class GroupByRepository {
  static async groupByTerms() {
    const result = await prisma.terms.findMany({
      where: {},
      select: {
        id: true,
        disciplines: {
          select: {
            id: true,
            name: true,
            teacherDisciplines: {
              select: {
                id: true,
                teachers: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
                tests: {
                  select: {
                    id: true,
                    categories: {
                      select: {
                        id: true,
                        name: true,
                        tests: {
                          select: {
                            id: true,
                            name: true,
                            pdfUrl: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return result.filter((term) => term.disciplines.length > 0);
  }
  static async groupByMany(
    table: Prisma.ModelName,
    data: any,
  ): Promise<unknown[]> {
    const { query } = new QueryFactory(table, "findMany");
    const result = await query(data);
    return result;
  }
}
