import { QueryFactory } from "@factories/QueryFactory";
import { Prisma } from "@prisma/client";

export class FindRepository {
  static async findUnique<T, Y>(
    table: Prisma.ModelName,
    data: { where: Y },
  ): Promise<T> {
    const { query } = new QueryFactory(table, "findMany");
    const result = await query(data);
    return result;
  }
}
