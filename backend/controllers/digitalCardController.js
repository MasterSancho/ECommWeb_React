import asyncHandler from 'express-async-handler';
import DigitalCard from '../models/digitalCardModel.js';

// @desc    Fetch Digital Card
// @route   Get /api/digitalcard
// @access  Public
const getDigitalCard = asyncHandler(async (req, res) => {
 const digitalcard = await DigitalCard.find(req.params);

 res.json({ digitalcard });
});

export { getDigitalCard };
