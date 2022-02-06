import express from 'express';
const router = express.Router();
import { getPictures } from '../controllers/pictureController.js';

router.route('/').get(getPictures);

export default router;
