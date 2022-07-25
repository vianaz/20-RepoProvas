import prisma from "@db/database";
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
                teachers: { select: { id: true, name: true } },
                tests: {
                  select: {
                    id: true,
                    categories: {
                      select: {
                        id: true,
                        name: true,
                        tests: {
                          select: { id: true, name: true, pdfUrl: true },
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

    return result;
  }
  static async groupByTeacher() {
    const result = await prisma.teacherDisciplines.findMany({
      select: {
        id: true,
        teachers: { select: { name: true } },
        disciplines: { select: { name: true } },
        tests: { select: { id: true, name: true, pdfUrl: true } },
      },
    });
    return result;
  }
}
