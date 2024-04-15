//THIS FILE IS WHERE THE FUNCTIONS FROM THE OTHER FILES ARE LINKED

// Import the required modules
import express from "express";
import { pool } from "./db/index.js";

import {
  getProducts,
  getBlueProducts,
  getRedProducts,
  getGreenProducts,
} from "./database_files/products.js";

import cors from "cors";
//Initialise the express app
const app = express();

app.use(cors());

// // Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

//Retrieving all the products from the products table

app.get("/products", async function (req, res) {
  console.log("Hello Products!");
  let products = await getProducts();
  res.status(200).json({ status: "success", payload: products });
});

//Retrieving all the blue products from the products table
app.get("/products/blue", async function (req, res) {
  try {
    console.log("Hello  blue products");
    let products = await getBlueProducts();
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

//Retrieving all the red products from the products table
app.get("/products/red", async function (req, res) {
  try {
    console.log("Hello  red products");
    let products = await getRedProducts();
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

//Retrieving all the green products from the products table
app.get("/products/green", async function (req, res) {
  try {
    console.log("Hello green products");
    let products = await getGreenProducts();
    res.status(200).json({ status: "success", payload: products });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// Start the server and listen on the specified port
app.listen(3000, function () {
  console.log(`Server listening on port ${PORT}`);
});
