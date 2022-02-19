import { MongooseModule } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class InventoryModel {
  id: string;
  product: ProductModel;
  description: string;
  user: UserModel;
}

export const InventorySchema = new mongoose.Schema({
  product: { type: Array, default: '' },
  description: { type: String, default: '' },
  user: { type: Array, default: '' },
});
