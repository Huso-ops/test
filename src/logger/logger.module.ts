
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerSchema } from 'src/models/logger.model';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerSchema }]),
  ],
  controllers: [LoggerController],
  providers: [LoggerService],
  exports: [LoggerService],
})

export class LoggerModule{}
/*
export class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
}
}*/
