
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { LoggerModel } from 'src/models/logger.model';
import { LoggerCreateDto } from 'src/dtos/logger.dto';


@Injectable()
export class LoggerService extends ResourceService<
  LoggerModel,
  LoggerCreateDto,
  LoggerCreateDto
> {
  constructor(
    @InjectModel('Logger')
   loggerMongo: Model<LoggerModel>,
  ) {
    super(loggerMongo);
  }
}