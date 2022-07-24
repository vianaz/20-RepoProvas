import { QueryFactory } from "@factories/QueryFactory";
import { Prisma } from "@prisma/client";

export class FindRepository {
  static async findUnique<T>(
    table: Prisma.ModelName,
    data: { where: unknown },
  ): Promise<T> {
    const { query } = new QueryFactory(table, "findFirst");
    const result = await query(data);
    return result;
  }
  static async findMany(
    table: Prisma.ModelName,
    data: { where: unknown },
  ): Promise<unknown[]> {
    const { query } = new QueryFactory(table, "findMany");
    const result = await query(data);
    return result;
  }
}
