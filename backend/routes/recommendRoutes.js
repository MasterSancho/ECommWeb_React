import express from 'express';
const router = express.Router();
import { getRecommends } from '../controllers/recommendController.js';

router.route('/').get(getRecommends);

export default router;
