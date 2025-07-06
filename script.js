const products = [
  { name: "MacBook Pro", category: "Laptop", price: 1200 },
  { name: "iPhone 13", category: "Phone", price: 999 },
  { name: "Dell XPS", category: "Laptop", price: 1100 },
  { name: "AirPods", category: "Accessories", price: 199 },
  { name: "Samsung Galaxy A16 5G", category: "Phone", price: 165 },
  { name: "iPhone 16", category: "Phone", price: 999 },
  { name: "Keyboard", category: "Accessories", price: 10 },
  { name: "Sandisk Pendrive 64GB", category: "Accessories", price: 5 },
  { name: "MacBook Air 13", category: "Laptop", price: 1037 },
  { name: "HP 14 Series", category: "Laptop", price: 244 },
  { name: "Nothing Phone (3)", category: "Phone", price: 200 },
  { name: "HP 15 Series", category: "Laptop", price:397 },
  { name: "Lenovo V15 Gen 2", category: "Laptop", price: 410 },
  { name: "Samsung Galaxy S25 Ultra", category: "Phone", price: 1119 },
  { name: "HP OMEN 16", category: "Laptop", price: 1650 },
  { name: "Acer Aspire Lite (13th Gen i50", category: "Laptop", price: 410 },
  { name: "Mouse", category: "Accessories", price: 50 },
  { name: "ASUS ZenBook 14 OLED", category: "Laptop", price: 890 },
  { name: "Google Pixel Buds Pro 2", category: "Accessories", price: 199 },
   { name: "Onplus 13", category: "Phone", price: 549 },
  { name: "Nothing Ear(3)", category: "Accessories", price: 149},
   { name: "Xiaomi 14T", category: "Phone", price: 699 },
  { name: "Galaxy Watch 6", category: "Accessories", price: 299 },
   { name: "Lenovo V15 Gen 2", category: "Laptop", price: 410 },
  { name: "Apple Watch Series 9", category: "Accessories", price: 699},
  { name: "Dell XPS 13", category: "Laptop", price: 1200 },
  { name: "Samsung Galaxy S25 Edge", category: "Phone", price: 1099},
  { name: "MacBook Air 15", category: "Laptop", price: 1288 },
  { name: "Apple 20W USB-C Adapter", category: "Accessories", price: 16 },
  { name: "Google Pixel 9 Pro", category: "Phone", price: 995}
  
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(filteredProducts) {
  container.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${product.name}</h3><p>Category: ${product.category}</p><p>Price: $${product.price}</p>`;
    container.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const sortOption = sortPrice.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortOption === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortPrice.addEventListener("change", applyFilters);

// Initial render
displayProducts(products);