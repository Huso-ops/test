import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface SettingModel extends Document {
    mail1:string;
    mail2:string;
    gsm:string;
    aboutUs:string;
    fax:string;
    telephone:string;
    facebook:string;
    instagram:string;
    twitter:string;

    
  }


  export const SettingSchema = new mongoose.Schema({
    mail1:{type:String, default:true},
    mail2:{type:String, default:true},
    gsm:{type:String, default:true},
    aboutUs:{type:String, default:true},
    fax:{type:String, default:true},
    telephone:{type:String,  default:true},
    facebook:{type:String,  default:true},
    instagram:{type:Boolean,  default:true},
    twitter:{type:String,  default:true},   
  });