function calculatePrice(product_price, discount = 10) {
  if (discount > 50) return "Discount isn't Avilable";
  if (product_price < 0) return "Product Price To Small";
  if (product_price > 10000)
    return "This product_price in not discount Avilable";
  let discount_price = (discount * product_price) / 100;
  product_price = product_price - discount_price; // 10% discount added
  let result = `You Got ${discount}% Discount Congrat! Product Price Is ${product_price}`;

  return result;
}

console.log(calculatePrice(5000, 50));
