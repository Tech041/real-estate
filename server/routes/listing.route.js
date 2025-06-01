import { Router } from "express";
import {
  createList,
  deleteList,
  editListing,
  fetchListing,
  fetchSingleList,
} from "../controllers/listing.controller.js";
import { userAuth } from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.js";

const listingRouter = Router();
listingRouter.post(
  "/create-list",
  userAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  createList
);
listingRouter.get("/listing", fetchListing);
listingRouter.get("/single-listing/:id", fetchSingleList);
listingRouter.post("/edit-listing/", userAuth, editListing);
listingRouter.delete("/delete-listing/:id", userAuth, deleteList);

export default listingRouter;
