import { pool } from './database.js';
import './dotenv.js';
import customItemsData from '../data/customItems.js';  // Assuming you have a data file for seeding custom items

// Function to create the custom_items table
const createCustomItemsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS custom_items;

    CREATE TABLE IF NOT EXISTS custom_items (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      price NUMERIC NOT NULL,
      options JSON NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 custom_items table created successfully');
  } catch (err) {
    console.error('⚠️ error creating custom_items table', err);
  }
};

// Function to seed the custom_items table
const seedCustomItemsTable = async () => {
  await createCustomItemsTable();  // Ensure the table is created before seeding

  customItemsData.forEach(async (item) => {
    const insertQuery = `INSERT INTO custom_items (name, price, options) VALUES ($1, $2, $3) RETURNING id`;
    const values = [item.name, item.price, item.options];

    try {
      const res = await pool.query(insertQuery, values);
      console.log(`✅ ${item.name} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting custom item', err);
    }
  });
};

// Seed the table with custom items
seedCustomItemsTable().catch(err => console.error(err));
