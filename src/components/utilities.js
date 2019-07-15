const findItem = (pricingRules, code) => {
  return pricingRules.filter(item => item.code === code);
};
export default findItem;
