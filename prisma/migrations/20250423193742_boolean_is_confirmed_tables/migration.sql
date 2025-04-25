/*
  Warnings:

  - The `isConfirmed` column on the `subscribers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `isConfirmed` column on the `userAdmin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "subscribers" DROP COLUMN "isConfirmed",
ADD COLUMN     "isConfirmed" BOOLEAN;

-- AlterTable
ALTER TABLE "userAdmin" DROP COLUMN "isConfirmed",
ADD COLUMN     "isConfirmed" BOOLEAN;
