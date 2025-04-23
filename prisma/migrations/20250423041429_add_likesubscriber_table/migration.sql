/*
  Warnings:

  - You are about to drop the column `urlSection` on the `subscribers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subscribers" DROP COLUMN "urlSection";

-- CreateTable
CREATE TABLE "likeSubscribers" (
    "id" SERIAL NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "urlSection" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "likeSubscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "likeSubscribers_subscriberId_idx" ON "likeSubscribers"("subscriberId");
