import express from "express";
import * as CommentController from "../controllers/comment.js";
import { verifyToken, Roles } from "../middleware/authVerify.js";

const router = express.Router();

//To make a comment
router.post("/:id/add", verifyToken(Roles.All), CommentController.addAComment);

//To see all comments made
router.post("/:id/add", verifyToken(Roles.All), CommentController.getComments);

//To like a comment
router.put("/:id/like", verifyToken(Roles.All), CommentController.likeAComment);

//To dislike a comment
router.put("/:id/dislike", verifyToken(Roles.All), CommentController.dislikeAComment);

//To delete a comment
router.delete("/:id", verifyToken(Roles.All), CommentController.dislikeAComment);

export default router;

