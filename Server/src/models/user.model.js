import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true, //this shows that we want to always enforce the username
      unique: true, //this shows that no 2 persons can use same username
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, //this means the password will be removed when transported to backend. Note: we didn't use unique here, cos 2 people might share same image
    },
    profilePhoto: {
      type: String,
      default:
        "https://res.cloudinary.com/ceenobi/image/upload/v1698666381/icons/user-avatar-profile-icon-black-vector-illustration_mpn3ef.jpg",
    },
    bio: {
      type: String,
      default: "Nothing to say yet",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    followers: {
      type: [String], //this holds more than 1 followers, hence the array []
    },
    following: {
      type: [String], //this holds more than 1 followers, hence the array []
    },
  },
  {
    timestamps: true,
  }
);


export default model("User", userSchema) 
