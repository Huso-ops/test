import *as mongoose from 'mongoose';
import { ProductModel } from 'tools/models/product.model';

export class CampaignModel {
    id : string;
    name : string;
    isActive : boolean;
    showHome : boolean;
    isCampaign : boolean;
    isDeleted: boolean;
    productId : ProductModel["id"];

}


export const CampaignSchema = new mongoose.Schema({
name : {type : String , default : ''},
isActive : {type : Boolean , default : false},
showHome : {type : Boolean, default : false},
isDeleted : {type : Boolean , default : false},
productId : {type : Array , default : ''},
})


