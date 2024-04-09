// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//function to get all products from the products table
export async function getProducts() {
  // Query the database and return all pots
  //Define SQL query
  const queryText = `SELECT * FROM product WHERE name LIKE '%pot%'`;
  //Send query to the database
  const result = await pool.query(queryText);
  console.log(`result ${result.rows}`);
  //return the result
  return result.rows;
}

//function to get products that are blue from the products table

export async function getBlueProducts() {
  try {
    const queryText = `SELECT * FROM product WHERE name LIKE '%Blue%'`;
    const result = await pool.query(queryText);
    return result.rows;
  } catch (error) {
    throw new Error("Error fetching blue products");
  }
}

//function to get products that are red from the products table

export async function getRedProducts() {
  try {
    const queryText = `SELECT * FROM product WHERE name LIKE '%Red%'`;
    const result = await pool.query(queryText);
    return result.rows;
  } catch (error) {
    throw new Error("Error fetching red products");
  }
}
