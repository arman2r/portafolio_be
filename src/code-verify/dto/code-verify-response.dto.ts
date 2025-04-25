export class CodeVerifyResponseDto {
  id: string;
  email: string;
  code: string;
  expiresAt?: Date;
  createdAt?: Date;
  subscriberEmail?: string;
  userAdminEmail?: string;
}
