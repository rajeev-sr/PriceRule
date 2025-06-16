import mongoose from 'mongoose';

const priceRuleSchema = new mongoose.Schema({
  ruleName: String,
  active: Boolean,
  evaluationScope: String,
  evaluationOrder: Number,
  evaluationEvents: {
    calculatorEvents: [String],
    configuratorEvents: String,
  },
  conditions: [{
    object: String,
    field: String,
    operator: String,
    valueType: String,
    value: String
  }],
  actions: [{
    targetObject: String,
    targetField: String,
    sourceType: String,
    sourceInput: String,
    executionOrder: Number
  }]
});

export default mongoose.model('PriceRule', priceRuleSchema);
