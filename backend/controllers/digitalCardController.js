import asyncHandler from 'express-async-handler';
import DigitalCard from '../models/digitalCardModel.js';

// @desc    Fetch all products
// @route   Get /api/products
// @access  Public
const getDigitalCard = asyncHandler(async (req, res) => {
 const digital_card = await DigitalCard.find();

 res.json({ digital_card });
});

export { getDigitalCard };
