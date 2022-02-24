import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { FilterModel } from 'src/models/filter.model';
import { LoggerService } from './logger.service';
import { LoggerModel } from 'src/models/logger.model';
import { LoggerCreateDto } from 'src/dtos/logger.dto';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  async CreateLogger(@Body() body: LoggerCreateDto): Promise<LoggerModel> {
    return this.loggerService.create(body);
  }
  @Get()
  async getAllLoggers(@Query() query:FilterModel): Promise<LoggerModel[]> {
    return await this.loggerService.findAll(query);
  }

  @Get(':id')
  async GetLogger(@Param() params): Promise<LoggerModel[]> {
    return this.loggerService.findOne(params.id);
  }

  @Put(':id')
  async updateLogger(
    @Param('id') id: string,
    @Body() loggerDto: LoggerCreateDto,
  ): Promise<LoggerModel> {
    return this.loggerService.update(id, loggerDto);
  }

  @Delete(':id')
  async removeLogger(@Param('id') id: string): Promise<LoggerModel> {
    return this.loggerService.delete(id);
  }
}

