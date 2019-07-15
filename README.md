# ACME Supermarket

Create a solution for the ACME Supermarket problem.

## Description of the problem

ACME's quest for global domination has prompted us to open a supermarket – we sell only three products:

    Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

The interface to our basket looks like this (shown in JavaScript):

    var basket = new Basket(pricingRules)
    basket.add(item)
    basket.add(item)
    var price = basket.total()

Implement a basket system that fulfills these requirements in JavaScript.

Test Data:

    Basket: FR1, SR1, FR1, CF1
    Total price expected: £19.34

    Basket: FR1, FR1
    Total price expected: £3.11

    Basket: SR1, SR1, FR1, SR1
    Total price expected: £16.61

//////////////////////////////////////////////////

```sh
to start the app
yarn install
yarn start
no interface atm use console
```

```sh
I believe this application can make the CEO and COO happy as it is super dynamic.
> They can add more items
> Apply get one buy one free to any item
> Add bulk discount to any available item
> And also it is easy to modify the price plan as it is on object format, JSON could've been better
```

```sh
to modify the price plan access ./src/components/price-plan.js
```

```js
//pricing plan structure

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
```
