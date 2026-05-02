import mongoose, { Schema, Document } from "mongoose";

export type CaseStatus = "activo" | "en proceso" | "cerrado";

export interface ICase extends Document {
  title: string;
  clientId: mongoose.Types.ObjectId;
  type: string;
  status: CaseStatus;
  userId: string;
}

const CaseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["activo", "en proceso", "cerrado"],
      default: "activo",
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICase>("Case", CaseSchema);