import PriceRule from '../models/priceRuleModel.js';

export const createPriceRule = async (req, res) => {
  try {
    const rule = await PriceRule.create(req.body);
    res.status(201).json(rule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPriceRules = async (req, res) => {
  try {
    const rules = await PriceRule.find();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 
