/*
  Warnings:

  - You are about to drop the column `offset` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "offset";

-- CreateIndex
CREATE INDEX "Message_date_idx" ON "Message"("date");
