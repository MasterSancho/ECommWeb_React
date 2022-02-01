import express from 'express';
const router = express.Router();
import { getDigitalCard } from '../controllers/digitalCardController.js';

router.route('/').get(getDigitalCard);

export default router;
