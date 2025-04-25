-- AlterTable
ALTER TABLE "subscribers" ADD COLUMN     "codeConfirm" INTEGER;

-- AlterTable
ALTER TABLE "userAdmin" ADD COLUMN     "codeConfirm" INTEGER;

-- CreateTable
CREATE TABLE "verificationCode" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "expiresAt" TIMESTAMPTZ NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subscriberEmail" TEXT,
    "userAdminEmail" TEXT,

    CONSTRAINT "verificationCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verificationCode_email_key" ON "verificationCode"("email");

-- CreateIndex
CREATE INDEX "verificationCode_subscriberEmail_idx" ON "verificationCode"("subscriberEmail");

-- CreateIndex
CREATE INDEX "verificationCode_userAdminEmail_idx" ON "verificationCode"("userAdminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "verificationCode_code_subscriberEmail_userAdminEmail_key" ON "verificationCode"("code", "subscriberEmail", "userAdminEmail");
