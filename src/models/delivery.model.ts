import { UserModel } from './user.model';
import { ProductModel } from './product.model';
import * as mongoose from 'mongoose';

export interface DeliveryModel extends Document {
  id: string;
  name: string;
  user: UserModel['id'];
  product: ProductModel['id'];
  deliveryAdress: UserModel['addressFirst'];
  deliveryAdress2: UserModel['addressTwo'];
  deliveryAdress3: UserModel['addressThree'];
  deliveryTime: Date;
  deliverySuccess: true;
}

export const DeliverySchema = new mongoose.Schema({
  name: { type: String, default: '' },
  user: { type: Array, default: '' },
  product: { type: Array, default: '' },
  deliveryAdress: { type: Array, default: '' },
  deliveryAdress2: { type: Array, default: '' },
  deliveryAdress3: { type: Array, default: '' },
  deliveryTime: { type: Date, default: '' },
  deliverySuccess: { type: Boolean, default: false },
});
