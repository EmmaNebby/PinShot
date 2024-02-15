import express from "express";
import * as PinController from "../controllers/pin.js";
import { verifyToken, Roles } from "../middleware/authVerify.js";
// import { genLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/create", verifyToken(Roles.All), PinController.createAPin);

// This is to see all the pins
router.get("/", PinController.getAllPins);

//To shuffle pictures
router.get("/random-explore", PinController.getRandomPins);

//To get the pins of the people I am following
router.get("/followed", verifyToken(Roles.All), PinController.getFollowedPins);

//To get all pins created by the user
router.get(
  "/:id/userpins",
  verifyToken(Roles.All),
  PinController.getPinsByUser
);

//To get all pins...
router.get("/:id", verifyToken(Roles.All), PinController.getASinglePin);

//To Like A Pin
router.put("/like/:id", verifyToken(Roles.All), PinController.likeAPin);

//To Dislike A Pin
router.put("/dislike/:id", verifyToken(Roles.All), PinController.dislikeAPin);

//To Get all the Pins liked by a user
router.get(
  "/:id/likedpins",
  verifyToken(Roles.All),
  PinController.getPinsLikedByUser
);

//To update a Pin
router.patch("/:id", verifyToken(Roles.All), PinController.updateAPin);

//To delete a Pin
router.delete("/:id", verifyToken(Roles.All), PinController.deleteAPin);

//To get related pins by their tags
router.get("/:id/related", verifyToken(Roles.All), PinController.getRelatedPin);

export default router;
