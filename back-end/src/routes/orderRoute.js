import { Router } from 'express';
const router = Router();
import orderController from '../controllers/orderController.js';

router.get('/orders', orderController.getOrders);

export default router;
