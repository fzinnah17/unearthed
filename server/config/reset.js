import { pool } from './database.js';
import './dotenv.js';
import giftData from '../data/gifts.js';

// asynchronous function createGiftsTable().
const createGiftsTable = async () => {
    // createTableQuery that is set to a SQL query to drop the gifts table if it exists and create a new table called gifts if it doesn't exist.
    const createTableQuery = `
        DROP TABLE IF EXISTS gifts;

        CREATE TABLE IF NOT EXISTS gifts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        );
    `;

    try {
        await pool.query(createTableQuery); // try block, query the pool with the createTableQuery.
        console.log('🎉 gifts table created successfully');
    } catch (err) { // catch block, log the error.
        console.error('⚠️ error creating gifts table', err);
    }
};
