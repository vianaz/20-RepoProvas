import prisma from "@db/database";
import { Prisma } from "@prisma/client";

export class QueryFactory {
  public query: any;
  constructor(table: Prisma.ModelName, type: Prisma.PrismaAction) {
    this.query = prisma[table][type];
  }
}
