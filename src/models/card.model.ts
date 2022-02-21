import * as mongoose from 'mongoose';
import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class CardModel {
  id: string;
  product: ProductModel["id"];
  description: string;
  user: UserModel["id"];
}

export const CardSchema = new mongoose.Schema({
  product: { type: Array, default: '' },
  description: { type: String, default: '' },
  user: { type: Array, default: '' },
});
