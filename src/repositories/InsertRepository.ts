import { QueryFactory } from "@factories/QueryFactory";
import { Prisma } from "@prisma/client";

export class InsertRepository {
  static async insert<Table>(
    table: Prisma.ModelName,
    data: any,
  ): Promise<Table> {
    const { query } = new QueryFactory(table, "create");
    return await query({ data });
  }
}
