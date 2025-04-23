/*
  Warnings:

  - Added the required column `urlSection` to the `subscribers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "subscribers" ADD COLUMN     "urlSection" TEXT NOT NULL;
