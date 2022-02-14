import asyncHandler from 'express-async-handler';
import Gallery from '../models/galleryModel.js';

// @desc Fetch Gallery
// @route Get /api/pictures
// @access Public

const getGallery = asyncHandler(async (req, res) => {
 const gallery = await Gallery.find({});

 res.json({ gallery });
});

export { getGallery };
