import *as mongoose from 'mongoose';

export class CampaignModel {
    id : string;
    name : string;
    isActive : boolean;
}


export const CampaignSchema = new mongoose.Schema({
name : {type : String , default : ''},
isActive : {type : Boolean , default : false}
})


