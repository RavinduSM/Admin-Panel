import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Serve at http:localhost:${port}`)
});