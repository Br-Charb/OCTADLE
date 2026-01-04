import dotenv from "dotenv"
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error)
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER is running on port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("MongoDB connection failed", err);
    }
}

startServer();

// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
//     res.send('Backend is live');
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// });
