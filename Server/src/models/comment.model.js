import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, //this is a keyword from mongoose to be able to reference a document.
      ref: "User", //same "User" as created in the export of user.model.js
      required: true,
    },
    pinId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

export default model("Comment", commentSchema);
