import mongoose, { Schema } from "mongoose";
import { Document } from "mongoose";

export interface IClient extends Document {
  name: string;
  phone?: string;
  email?: string;
  notes?: string;
  userId: string;
}

const ClientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: String,
    email: String,
    notes: String,
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IClient>("Client", ClientSchema);