import { MongoClient } from 'mongodb';
import './dotenv.js';

const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(mongoUri, { useUnifiedTopology: true });

export async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    return client.db(dbName);
}
