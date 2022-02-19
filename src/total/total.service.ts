import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryModel } from 'src/models/category.model';
import { StockModel } from 'src/models/stock.model';
import { UserModel } from 'src/models/user.model';
import { ProductModel } from 'tools/models/product.model';

@Injectable()
export class TotalService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
    @InjectModel('Stock') private readonly stockMongo: Model<StockModel>,
    @InjectModel('Category') private readonly categoryMongo: Model<CategoryModel>,
    @InjectModel('Product') private readonly productMongo: Model<ProductModel>,
  ) {}
  async findAll(): Promise<any> {
    const userCount = await this.userMongo.countDocuments({}).exec();
    const stockCount = await this.stockMongo.countDocuments({}).exec();
    const categoryCount = await this.categoryMongo.countDocuments({}).exec();
    const productCount = await this.productMongo.countDocuments({}).exec();

    return await {
      user: userCount,
      stock: stockCount,
      category: categoryCount,
      product: productCount,
    };
  }
}
