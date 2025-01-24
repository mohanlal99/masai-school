function DiscountPriceCalculator(product_price) {
  if (product_price <= 0) {
    return "Invalid price, the price must be a non-negative or Zero number.";
  }
  if (product_price <= 20) {
    return `The final price of the item is: ${product_price}`;
  }

  let discount = 10
  let final_price = product_price - ((discount * product_price)/100)
  return `The final price of the item is: ${final_price}$`
}
console.log(DiscountPriceCalculator(25))
console.log(DiscountPriceCalculator(15))
console.log(DiscountPriceCalculator(20))