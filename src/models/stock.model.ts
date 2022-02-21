import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface StockModel extends Document {
    id: string;
    name: string;
    showHome: boolean;
    isActive: boolean;
    
  }


  export const StockSchema = new mongoose.Schema({
    name: { type: String, requried: [true, 'Full Name İs Required!'] },
    showHome: { type: String, defaut: '' },
    isActive: { type: Boolean, default: true },
  });