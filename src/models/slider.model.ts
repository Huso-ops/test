import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface SliderModel extends Document {
    sliderUrl:string;
    sliderOrder:string;
    showHome: boolean;
    isActive: boolean;
    
  }


  export const SliderSchema = new mongoose.Schema({
    sliderUrl : {type :String,default : true},
    sliderOrder : {type: String,default :true},
    showHome: { type: String, defaut: true },
    isActive: { type: Boolean, default: true },
  });