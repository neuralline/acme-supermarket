//@ts-check

/*   Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23
 */

const pricingRules = [
  {
    code: "FR1",
    name: "Fruit tea",
    price: 3.11,
    eligibleAmount: 0,
    discountedPrice: 0,
    twoForOne: true
  },
  {
    code: "SR1",
    name: "Strawberries",
    price: 5.0,
    eligibleAmount: 3,
    discountedPrice: 4.5,
    twoForOne: false
  },
  {
    code: "CF1",
    name: "Coffee",
    price: 11.23,
    eligibleAmount: 0,
    discountedPrice: 0,
    twoForOne: false
  }
];

export default pricingRules;
