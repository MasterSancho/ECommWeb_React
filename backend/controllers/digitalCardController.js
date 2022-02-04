import asyncHandler from 'express-async-handler';
import DigitalCard from '../models/digitalCardModel.js';

// @desc    Fetch Digital Card
// @route   Get /api/digitalcards
// @access  Public
const getDigitalCard = asyncHandler(async (req, res) => {
 const digitalcards = await DigitalCard.find({});

 res.json({ digitalcards });
});

// @desc    Fetch Digital Card
// @route   Get /api/digitalcards/:id
// @access  Public
const getDigitalCardById = asyncHandler(async (req, res) => {
 const digitalcard = await DigitalCard.findById(req.params.id);

 if (digitalcard) {
  res.json(digitalcard);
 } else {
  res.status(404).json({ message: 'Product not found' });
 }
});

export { getDigitalCard, getDigitalCardById };
