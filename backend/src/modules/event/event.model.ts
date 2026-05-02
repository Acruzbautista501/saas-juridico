import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  date: Date;
  description?: string;
  caseId: mongoose.Types.ObjectId;
  userId: string;
}

const EventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      index: true, // 🔥 importante para ordenar y dashboard
    },
    description: String,
    caseId: {
      type: Schema.Types.ObjectId,
      ref: "Case",
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);