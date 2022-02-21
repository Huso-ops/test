
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TotalService } from './total.service';

@Controller('total')
export class TotalController {
  constructor(private totalService: TotalService) {}

  @Get()
  async getAll() {
    return await this.totalService.findAll();
  }
}