import { Module } from '@nestjs/common';

import { TotalService } from './total.service';
import { TotalController } from './total.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from 'src/models/stock.model';
import { UserSchema } from 'src/models/user.model';
import { CategorySchema } from 'src/models/category.model';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      {name : 'Stock', schema : StockSchema},
      {name : 'Category', schema : CategorySchema}
      
    ]),
  ],
  controllers: [TotalController],
  providers: [TotalService],
})
export class TotalModule {}
