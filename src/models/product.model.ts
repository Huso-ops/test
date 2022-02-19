import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { CategoryModel } from './category.model';
import { UserModel } from './user.model';

export interface ProductModel extends Document {
id: string;
name : string;
price : string
categoryId : CategoryModel;
description:string;
image:string;
finalprice: object;
subCategoryId:object;
user : UserModel;
}


export const ProductSchema = new mongoose.Schema({
    name :{type:String,default:''},
    price:{type:String,default:''},
    categoryId:{type:Array,default:true},
    description :{type:String,default:''},
    img : {type:Object},
    subCategoryId:{type:Array,default:true},
    user:{type:Array,default:''},



});