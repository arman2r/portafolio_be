import { Test, TestingModule } from '@nestjs/testing';
import { CodeVerifyService } from './code-verify.service';

describe('CodeVerifyService', () => {
  let service: CodeVerifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeVerifyService],
    }).compile();

    service = module.get<CodeVerifyService>(CodeVerifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
