import express from 'express';
const router = express.Router();
import {
 getProducts,
 getProductById,
 deleteProduct,
 createProduct,
 updateProduct,
 getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/products/').get(getProducts).post(protect, admin, createProduct);
router.get('/products/top', getTopProducts);
router
 .route('/products/:id')
 .get(getProductById)
 .delete(protect, admin, deleteProduct)
 .put(protect, admin, updateProduct);

export default router;
