
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/models/category.model';
import { StockSchema } from 'src/models/stock.model';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stock', schema: StockSchema }]),
  ],
  controllers: [StockController],
  providers: [StockService],
  exports: [StockService],
})
export class StockModule {}