import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import driverRouter from './routes/driverRouter.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());
// Enable cors at the server side. 

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

app.use('/api/driver', driverRouter);

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Serve at http:localhost:${port}`)
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})