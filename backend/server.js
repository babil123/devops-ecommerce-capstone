const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Ecommerce Backend is Running 🚀");
});

// Sample products API (for frontend later)
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
  ];
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
