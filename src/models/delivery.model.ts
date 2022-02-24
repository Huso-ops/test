import { UserModel } from './user.model';
import { ProductModel } from './product.model';
import * as mongoose from 'mongoose';

export interface DeliveryModel extends Document {
  id: string;
  name: string;
  user: UserModel['id'];
  product: ProductModel['id'];
  deliveryTime: Date;
  deliverySuccess: true;
  
}

export const DeliverySchema = new mongoose.Schema({
  name: { type: String, default: '' },
  user: { type: Array, default: '' },
  product: { type: Array, default: '' },
  deliveryTime: { type: Date, default: '' },
  deliverySuccess: { type: Boolean, default: false },
});
