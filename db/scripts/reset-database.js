import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS product_category CASCADE;
        DROP TABLE IF EXISTS product_inventory CASCADE;
        DROP TABLE IF EXISTS product CASCADE;
    `);

    //Create the product table
    await pool.query(`
    CREATE TABLE product (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name VARCHAR NOT NULL,
      price DECIMAL NOT NULL,
      product_photo VARCHAR NOT NULL
    )`);

    // Create the product_category table
    await pool.query(`
        CREATE TABLE product_category (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL,
            product_id INT REFERENCES product(id)
        );
    `);

    // Create the product_inventory table
    await pool.query(`
        CREATE TABLE product_inventory (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            quantity INT NOT NULL,
            modified_at TIMESTAMP NOT NULL,
            product_id INT REFERENCES product(id)
            
        );
    `);

    // Adding data into the product_category table
    await pool.query(`
        INSERT INTO product_category (name, description, created_at)
        VALUES 
            ('blue pot','blue pot, indoor','01/01/2015'),
            ('red pot', 'red pot, indoor', '02/01/2015');
    `);

    // Adding data into the product_inventory table
    await pool.query(`
        INSERT INTO product_inventory (quantity, modified_at)
        VALUES 
            (40, '03/05/2015'),
            (2, '06/07/2015');
    `);

    //Adding data into the product table
    await pool.query(`
          INSERT INTO product (name, price, product_photo)
          VALUES
            ('Blue plant pot', 40.99, 'blue_pot.jpeg'),
            ('Green plant pot', 6.99, 'green_pot.webp'),
            ('Red plant pot', 4.99, 'red_pot.jpeg'),
            ('Red viking pot', 16.99, 'red_pot.jpeg'),
            ('Red pretty pot', 50.99, 'red_pot.jpeg'),
            ('Blue circular pot', 34.99, 'blue_pot.jpeg'),
            ('Red pot', 15.99, 'red_pot.jpeg'),
            ('Red circular pot', 12.99, 'red_pot.jpeg'),
            ('Big Red pot', 7.99, 'red_pot.jpeg'),
            ('Blue power pot', 31.99, 'blue_pot.jpeg'),
            ('Red pot', 10.99, 'red_pot.jpeg'),
            ('Red star pot', 17.99, 'red_pot.jpeg'),
            ('Red pot', 10.99, 'red_pot.jpeg'),
            ('Blue pot', 25.99, 'blue_pot.jpeg'),
            ('Red colour pot', 3.99, 'red_pot.jpeg'),
            ('Large Red pot', 23.99, 'red_pot.jpeg'),
            ('Red pot', 10.99, 'red_pot.jpeg'),
            ('Red square pot', 12.99, 'red_pot.jpeg');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
