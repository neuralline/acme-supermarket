//@ts-check

/*   Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23
 */

import pricingRules from "./components/pricing-rules";
import findItem from "./components/utilities";

class Basket {
  constructor(pricingRules) {
    this.id = [];
    this.items = [];
    this.pricingRules = pricingRules || [];
  }

  add(code) {
    const product = findItem(this.pricingRules, code);
    const index = this.items.findIndex(item => item.code === code);
    if (index === -1) {
      this.items.push({ ...product[0], numberOfItems: 1 });
    } else {
      this.items[index] = {
        ...product[0],
        numberOfItems: this.items[index].numberOfItems + 1
      };
    }
  }

  total() {
    const totalPrice = this.items.map(item => {
      if (item.twoForOne) {
        return Math.ceil((item.numberOfItems / 2) * 1) * item.price;
      } else {
        const price =
          item.numberOfItems <= item.eligibleAmount
            ? item.discountedPrice
            : item.price;
        return item.numberOfItems * price;
      }
    });
    return totalPrice.reduce((sum, x) => sum + x);
  }
}

/* 
////////////////////////////////////////////////////////////
test
///////////////////////////////////////////////////////////

*/

const basket = new Basket(pricingRules);
basket.add("SR1");
basket.add("SR1");
basket.add("FR1");
basket.add("FR1");
basket.add("FR1");
basket.add("FR1");
basket.add("SR1");
const price = basket.total();
console.log("price", price);
