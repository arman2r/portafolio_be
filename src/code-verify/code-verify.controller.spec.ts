import { Test, TestingModule } from '@nestjs/testing';
import { CodeVerifyController } from './code-verify.controller';
import { CodeVerifyService } from './code-verify.service';

describe('CodeVerifyController', () => {
  let controller: CodeVerifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeVerifyController],
      providers: [CodeVerifyService],
    }).compile();

    controller = module.get<CodeVerifyController>(CodeVerifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
