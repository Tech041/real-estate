import { v2 as cloudinary } from "cloudinary";
import Listing from "../models/listing.model.js";

export const createList = async (req, res) => {
  try {
    const { title, bedroom, bathroom, loc, price, contact, description } =
      req.body;

    if (
      !title ||
      !bedroom ||
      !bathroom ||
      !loc ||
      !contact ||
      !description ||
      !price
    ) {
      return res.json({ success: false, message: "Incomplete data entry" });
    }
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    if (!image1 || !image2 || !image3) {
      return res.json({ success: false, message: "Incomplete file upload" });
    }
    const images = [image1, image2, image3].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const newListing = {
      title,
      bedroom: Number(bedroom),
      bathroom: Number(bathroom),
      loc,
      contact,
      description,
      price,
      image: imagesUrl,
      listedBy: req.userId,
    };

    const listing = new Listing(newListing);
    await listing.save();
    return res.json({
      success: true,
      message: "List created successfully",
      listing,
    });
  } catch (error) {
    console.log("Error in create listing controller", error);
  }
};

// Fetch all listed items
export const fetchListing = async (req, res) => {
  try {
    const listing = await Listing.find({});
    return res.json({ success: true, message: "All listing fetched", listing });
  } catch (error) {
    console.log("Error fetching listing", error);
  }
};

// Fetch single list

export const fetchSingleList = async (req, res) => {
  const { id } = req.params;
  const singleList = await Listing.findById(id);
  return res.json({
    success: true,
    message: "single list fetched",
    singleList,
  });
};

// Editing listed description

export const editListing = async (req, res) => {
  try {
    const { id, newDesc } = req.body;
    if (!id || !newDesc) {
      return res.json({ success: false, message: " Field is empty" });
    }
    const userId = req.userId;
    const listing = await Listing.findById(id);
    if (listing.listedBy.toString() !== userId.toString())
      return res.json({
        success: false,
        message: "Can't edit someone else's listing",
      });

    const updateList = await Listing.findByIdAndUpdate(
      id,
      { description: newDesc },
      { new: true }
    );
    if (!updateList) {
      return res.json({ success: false, message: "Listing not found" });
    }
    return res.json({
      success: true,
      message: "edited successfully",
      updateList,
    });
  } catch (error) {
    console.log("Error editing list", error);
    return res.json({ message: error });
  }
};

// Delete Listing

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const listing = await Listing.findById(id);
    if (listing.listedBy.toString() !== userId.toString())
      return res.json({
        success: false,
        message: "Can't delete someone else's listing",
      });
    await Listing.findByIdAndDelete(id);
    return res.json({ success: true, message: "deleted successfully" });
  } catch (error) {
    console.log("Error deleting listing", error);
  }
};
