/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `disciplines` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "disciplines_termId_key";

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");
