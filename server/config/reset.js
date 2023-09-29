// import connectDB from './database.js';
// import './dotenv.js';
// import giftData from '../data/gifts.js';


// // asynchronous function createGiftsTable().
// const createGiftsTable = async () => {
//     // createTableQuery that is set to a SQL query to drop the gifts table if it exists and create a new table called gifts if it doesn't exist.
//     const createTableQuery = `
//         DROP TABLE IF EXISTS gifts;

//         CREATE TABLE IF NOT EXISTS gifts (
//             id SERIAL PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             pricePoint VARCHAR(10) NOT NULL,
//             audience VARCHAR(255) NOT NULL,
//             image VARCHAR(255) NOT NULL,
//             description TEXT NOT NULL,
//             submittedBy VARCHAR(255) NOT NULL,
//             submittedOn TIMESTAMP NOT NULL
//         );
//     `;

//     try {
//         await pool.query(createTableQuery); // try block, query the pool with the createTableQuery.
//         console.log('🎉 gifts table created successfully');
//     } catch (err) { // catch block, log the error.
//         console.error('⚠️ error creating gifts table', err);
//     }
// };

// // asynchronous function called seedGiftsTable()
// const seedGiftsTable = async () => {
//     await createGiftsTable();  // Call the createGiftsTable() function and wait for the response.
//     // traverse the giftData
//     giftData.forEach(async (gift) => {
//         const insertQuery = { // insertQuery that is set to a SQL query to insert the values into the gifts table.
//             text: 'INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//             // values that is set to an array of the gift attributes.
//             values: [
//                 gift.name,
//                 gift.pricePoint,
//                 gift.audience,
//                 gift.image,
//                 gift.description,
//                 gift.submittedBy,
//                 gift.submittedOn
//             ]
//         };
//         // Query the pool with the insertQuery and values. If there is an error, log the error.
//         try {
//             await pool.query(insertQuery);
//             console.log(`✅ ${gift.name} added successfully`);
//         } catch (err) {
//             console.error('⚠️ error inserting gift', err);
//         }
//     });
// };

// reset.js

// import giftData from '../data/gifts.js';           // Ensure this path is correct
import { MongoClient } from 'mongodb';
import giftData from '../data/gifts.js';

// MongoDB connection details
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(mongoUri, { useUnifiedTopology: true });

const seedGiftsCollection = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('gifts');

        // Drop collection if it exists
        if (await collection.countDocuments({}) !== 0) {
            await collection.drop();
            console.log('🎉 gifts collection dropped');
        }

        // Insert the giftData into the collection
        await collection.insertMany(giftData);
        console.log('🎉 gifts collection seeded successfully');
    } catch (err) {
        console.error('⚠️ error seeding gifts collection', err);
    } finally {
        await client.close();
    }
};

seedGiftsCollection();

