import express from 'express';
import { getAllSales, getSaleById, createSale } from '../controllers/sales.controller.js';

const router = express.Router();

router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', createSale);

export default router;