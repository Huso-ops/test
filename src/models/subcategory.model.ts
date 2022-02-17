import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { CategoryModel } from './category.model';

export interface SubCategoryModel extends Document {
  id: string;
  name: string;
  category : CategoryModel; 
  showHome: boolean;
  isSubcategory: boolean;
  mainCategory: string;
  isActive: boolean;
}

export const  SubCategorySchema = new mongoose.Schema({
  name: { type: String, requried: [true, 'Full Name İs Required!'] },
  category :{type : Array , default :''}, 
  showHome: { type: String, defaut: '' },
  isSubcategory: { type: Boolean, default: true },
  mainCategory: { type: String, defaut: '' },
  isActive: { type: Boolean, default: true },
});
