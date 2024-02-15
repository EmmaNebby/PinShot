import { Schema, model } from "mongoose";

const tokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expireAt: { type: Date, default: Date.now, expires: 1800 }, //expires time, i.e. 1800 is in seconds, hence this will expire after 30 min
  },
  {
    timestamps: true,
  }
);

export default model("Token", tokenSchema);
