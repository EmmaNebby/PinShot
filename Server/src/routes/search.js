import express from "express";
import * as SearchController from "../controllers/search.js";
import { verifyToken, Roles } from "../middleware/authVerify.js";

const router = express.Router();

//To see the searched result
router.get("/", verifyToken(Roles.All), SearchController.searchDb);

//To see the get Tags
router.get("/tags", verifyToken(Roles.All), SearchController.getTags);

//To see the delete A Tag
router.delete("/:id/tags", verifyToken(Roles.All), SearchController.deleteATag);

export default router;
