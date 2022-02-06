import asyncHandler from 'express-async-handler';
import Picture from '../models/pictureModel.js';

// @desc    Fetch Pictures
// @route   Get /api/pictures
// @access  Public
const getPictures = asyncHandler(async (req, res) => {
 const pictures = await Picture.find({});

 res.json({ pictures });
});

export { getPictures };
