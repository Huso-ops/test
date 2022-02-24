
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceService } from 'src/libs/services/resource.service';
import { CategoryModel } from 'src/models/category.model';
import { CategoryCreateDto } from 'src/dtos/category.dto';
import { StockCreateDto } from 'src/dtos/stock.dto';
import { StockModel } from 'src/models/stock.model';


@Injectable()
export class StockService extends ResourceService<
  StockModel,
  StockCreateDto,
 StockCreateDto
> {
  constructor(
    @InjectModel('Stock')
    stockMongo: Model<StockModel>,
  ) {
    super(stockMongo);
  }
}