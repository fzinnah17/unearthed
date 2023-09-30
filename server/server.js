import express from 'express';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import giftsRouter from './routes/gifts.js'
import './config/dotenv.js';


const app = express(); //Initialize the Express app.

// cors middleware.
app.use(cors());

const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
const __dirname = dirname(__filename); // Get the directory name of the current module


app.use('/gifts', giftsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

//Start a server on port process.env.PORT or 3001.
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

//404 page
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});






// Later for production use

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// // import morgan from 'morgan'; // Uncomment this if you choose to use morgan for logging

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // app.use(morgan('combined')); // Uncomment this if you choose to use morgan for logging

// // Serve static files from the client directory
// app.use('/public', express.static(path.join(__dirname, '../client')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`🚀 Server listening on http://localhost:${PORT}`);
// });

// // A better 404 page (for the sake of example)
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, '../client/404.html')); // assuming you have a 404.html in your client directory
// });