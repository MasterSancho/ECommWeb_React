import asyncHandler from 'express-async-handler';
import Recommend from '../models/recommendModel.js';

// @desc    Fetch Recommends
// @route   Get /api/recommends
// @access  Public
const getRecommends = asyncHandler(async (req, res) => {
 const recommends = await Recommend.find({});

 res.json({ recommends });
});

export { getRecommends };
