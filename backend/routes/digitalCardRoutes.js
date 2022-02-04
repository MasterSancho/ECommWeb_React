import express from 'express';
const router = express.Router();
import {
 getDigitalCard,
 getDigitalCardById,
} from '../controllers/digitalCardController.js';

router.route('/').get(getDigitalCard);
router.route('/:id').get(getDigitalCardById);

export default router;
