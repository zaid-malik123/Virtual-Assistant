// packages import
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// files import
import { connectDB } from './src/db/db.js';

// express app initialization
const app = express();
// environment variables configuration
dotenv.config();


// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// server listening
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});
