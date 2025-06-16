import express from 'express';
import { createPriceRule, getAllPriceRules } from '../controllers/priceRuleController.js';

const router = express.Router();

router.post('/price-rules', createPriceRule);
router.get('/price-rules', getAllPriceRules);

export default router;
