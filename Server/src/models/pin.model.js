import { Schema, model } from "mongoose";

const pinSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, //this is a keyword from mongoose to be able to reference a document.
      ref: "User", //same "User" as created in the export of user.model.js
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    tags: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
      max: 50, //this means the title won't be more than 50 characters long
    },
    description: {
      type: String,
      required: true,
      max: 300,
    },
    likes: {
      type: [String], //this is to populate those who like my post
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Pin", pinSchema);
