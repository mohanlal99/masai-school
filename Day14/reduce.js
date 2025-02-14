let ShopData = [
  {},
  { "name": "Shirt", "category": "Clothing", "price": 25.99, "brand": "Nike", "material": "Cotton", "color": "Blue", "size": "M" },
  { "name": "Jeans", "category": "Clothing", "price": 45.99, "brand": "Levi's", "material": "Denim", "color": "Dark Blue", "size": "32" },
  { "name": "Sneakers", "category": "Footwear", "price": 59.99, "brand": "Adidas", "material": "Synthetic", "color": "White", "size": "10" },
  { "name": "Leather Jacket", "category": "Clothing", "price": 120.00, "brand": "AllSaints", "material": "Leather", "color": "Black", "size": "L" },
  { "name": "Smartphone", "category": "Electronics", "price": 799.99, "brand": "Apple", "material": "Glass", "color": "Space Gray", "storage": "128GB" },
  { "name": "Laptop", "category": "Electronics", "price": 999.99, "brand": "Dell", "material": "Aluminum", "color": "Silver", "ram": "16GB", "storage": "512GB SSD" },
  { "name": "Smartwatch", "category": "Electronics", "price": 199.99, "brand": "Samsung", "material": "Aluminum", "color": "Black", "battery_life": "48 hours" },
  { "name": "T-shirt", "category": "Clothing", "price": 15.99, "brand": "Uniqlo", "material": "Cotton", "color": "White", "size": "S" },
  { "name": "Socks", "category": "Clothing", "price": 7.99, "brand": "Nike", "material": "Cotton", "color": "Black", "size": "L" },
  { "name": "Backpack", "category": "Accessories", "price": 39.99, "brand": "Herschel", "material": "Polyester", "color": "Red", "capacity": "25L" },
  { "name": "Sunglasses", "category": "Accessories", "price": 50.00, "brand": "Ray-Ban", "material": "Plastic", "color": "Black" },
  { "name": "Running Shoes", "category": "Footwear", "price": 85.99, "brand": "Brooks", "material": "Mesh", "color": "Blue", "size": "9" },
  { "name": "Dress", "category": "Clothing", "price": 89.99, "brand": "Zara", "material": "Silk", "color": "Red", "size": "M" },
  { "name": "Winter Coat", "category": "Clothing", "price": 120.00, "brand": "Patagonia", "material": "Wool", "color": "Gray", "size": "L" },
  { "name": "Boots", "category": "Footwear", "price": 110.00, "brand": "Timberland", "material": "Leather", "color": "Brown", "size": "11" },
  { "name": "Charger", "category": "Electronics", "price": 20.00, "brand": "Anker", "material": "Plastic", "color": "White", "type": "USB-C" },
  { "name": "Headphones", "category": "Electronics", "price": 149.99, "brand": "Sony", "material": "Plastic", "color": "Black", "type": "Over-ear" },
  { "name": "Blender", "category": "Home Appliances", "price": 89.99, "brand": "Ninja", "material": "Plastic", "color": "Black", "capacity": "1.5L" },
  { "name": "Microwave", "category": "Home Appliances", "price": 129.99, "brand": "Panasonic", "material": "Stainless Steel", "color": "Silver", "capacity": "30L" },
  { "name": "Vacuum Cleaner", "category": "Home Appliances", "price": 150.00, "brand": "Dyson", "material": "Plastic", "color": "Yellow", "type": "Cordless" },
  { "name": "Smart Speaker", "category": "Electronics", "price": 129.99, "brand": "Amazon", "material": "Plastic", "color": "Charcoal", "type": "Alexa" },
  { "name": "Wristwatch", "category": "Accessories", "price": 299.99, "brand": "Rolex", "material": "Stainless Steel", "color": "Silver", "movement": "Automatic" },
  { "name": "Baseball Cap", "category": "Accessories", "price": 20.00, "brand": "New Era", "material": "Cotton", "color": "Black" },
  { "name": "Bicycle", "category": "Sports", "price": 450.00, "brand": "Trek", "material": "Aluminum", "color": "Red", "type": "Mountain" },
  { "name": "Football", "category": "Sports", "price": 35.00, "brand": "Wilson", "material": "Leather", "color": "Brown", "size": "Standard" },
  { "name": "Tennis Racket", "category": "Sports", "price": 75.00, "brand": "Babolat", "material": "Graphite", "color": "Black", "size": "Standard" },
  { "name": "Yoga Mat", "category": "Sports", "price": 40.00, "brand": "Liforme", "material": "Rubber", "color": "Purple" },
  { "name": "Running Shorts", "category": "Clothing", "price": 22.00, "brand": "Under Armour", "material": "Polyester", "color": "Black", "size": "L" },
  { "name": "Sweater", "category": "Clothing", "price": 50.00, "brand": "Ralph Lauren", "material": "Wool", "color": "Navy Blue", "size": "M" },
  { "name": "Pillow", "category": "Home", "price": 30.00, "brand": "Tempur-Pedic", "material": "Memory Foam", "color": "White", "size": "Standard" },
  { "name": "Duvet", "category": "Home", "price": 120.00, "brand": "Brooklinen", "material": "Cotton", "color": "Gray", "size": "Queen" },
  { "name": "Curtains", "category": "Home", "price": 70.00, "brand": "IKEA", "material": "Polyester", "color": "Beige", "size": "Long" },
  { "name": "Coffee Maker", "category": "Home Appliances", "price": 99.99, "brand": "Keurig", "material": "Plastic", "color": "Black", "capacity": "1.5L" },
  { "name": "Air Purifier", "category": "Home Appliances", "price": 249.99, "brand": "Dyson", "material": "Plastic", "color": "White", "capacity": "500 sq ft" },
  { "name": "Fridge", "category": "Home Appliances", "price": 899.99, "brand": "LG", "material": "Steel", "color": "Stainless Steel", "capacity": "20 cu ft" },
  { "name": "Guitar", "category": "Musical Instruments", "price": 350.00, "brand": "Fender", "material": "Wood", "color": "Sunburst", "type": "Electric" },
  { "name": "Violin", "category": "Musical Instruments", "price": 200.00, "brand": "Yamaha", "material": "Wood", "color": "Brown", "size": "4/4" },
  { "name": "Piano", "category": "Musical Instruments", "price": 2500.00, "brand": "Yamaha", "material": "Wood", "color": "Black", "type": "Grand" },
  { "name": "Digital Camera", "category": "Electronics", "price": 599.99, "brand": "Canon", "material": "Plastic", "color": "Black", "resolution": "24.1 MP" },
  { "name": "Drone", "category": "Electronics", "price": 499.99, "brand": "DJI", "material": "Plastic", "color": "White", "type": "Quadcopter" },
  { "name": "Coffee Mug", "category": "Accessories", "price": 15.00, "brand": "Contigo", "material": "Ceramic", "color": "Black" },
  { "name": "Yoga Pants", "category": "Clothing", "price": 35.00, "brand": "Lululemon", "material": "Spandex", "color": "Black", "size": "L" },
  { "name": "Handbag", "category": "Accessories", "price": 150.00, "brand": "Michael Kors", "material": "Leather", "color": "Brown" },
  { "name": "Wallet", "category": "Accessories", "price": 50.00, "brand": "Coach", "material": "Leather", "color": "Black" },
  { "name": "Perfume", "category": "Beauty", "price": 79.99, "brand": "Chanel", "material": "Liquid", "color": "Clear", "fragrance": "Floral" },
  { "name": "Shampoo", "category": "Beauty", "price": 18.00, "brand": "Aveda", "material": "Liquid", "color": "Green", "volume": "300ml" },
  { "name": "Lipstick", "category": "Beauty", "price": 24.00, "brand": "MAC", "material": "Solid", "color": "Red", "finish": "Matte" },
  { "name": "Sunscreen", "category": "Beauty", "price": 12.00, "brand": "Neutrogena", "material": "Liquid", "color": "Clear", "SPF": "50" }
]

// for(let item of ShopData){
//   console.log(item)
// }

let result  = ShopData.reduce((acc,curr)=>{
  if(!acc[curr.category]){
    acc[curr.category] = []
  }
  // curr[curr.category] =  []
  acc[curr.category].push(curr)
  return acc
})

console.log(result)
