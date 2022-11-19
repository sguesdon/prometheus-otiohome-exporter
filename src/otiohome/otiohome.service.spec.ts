import { Test, TestingModule } from '@nestjs/testing';
import { OtiohomeService } from './otiohome.service';

describe('OtiohomeService', () => {
  let service: OtiohomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtiohomeService],
    }).compile();

    service = module.get<OtiohomeService>(OtiohomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
