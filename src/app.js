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
    this.schema = {
      code: "", //item id
      name: "", //item name
      price: 0, //item original price
      eligibleAmount: 0, //number of bulk amount required
      discountedPrice: 0, //bulk price
      twoForOne: false, // eligible for buy one get one free
      //internal use
      numberOfItems: 0 // number of items in the basket
    };
    console.log("acme-supermarket");
  }

  add(code) {
    const product = findItem(this.pricingRules, code);
    if (!product[0]) {
      return console.log(code, ": item not recognised, please scan again");
    }
    const index = this.items.findIndex(item => item.code === code);
    if (index === -1) {
      this.items.push({ ...this.schema, ...product[0], numberOfItems: 1 });
    } else {
      this.items[index] = {
        ...product[0],
        numberOfItems: this.items[index].numberOfItems + 1
      };
    }
    console.log(product[0].name, " has been added to your basket");
  }

  total() {
    const totalPrice = this.items.map(item => {
      if (item.twoForOne) {
        console.log(`get free ${item.name} on bulk buy`);
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
basket.add("SR5");
basket.add("FR1");
basket.add("FR1");
basket.add("FR1");
basket.add("FR1");
basket.add("FR1");
basket.add("SR1");
const price = basket.total();
console.log("price", price);
