import { UserModel } from "./user.model";
import * as mongoose from 'mongoose';

export class LoggerModel {
    id : string;
    logDescription:string;
    logUser : UserModel["id"];
    logDate: Date;
    logProcess : string;
    logResult : string;
}


export const LoggerSchema = new mongoose.Schema({
   logDescription : {type : String ,  default : ''},
   logUser : {type : Array , default : ''},
   logDate : {type : Date , default : ''},
   logProcess : {type : String , default : ''},
   logResult : {type : String , default :''}
  });
  