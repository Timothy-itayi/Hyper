import express from 'express';
import cors from 'cors';
import { join } from 'path';
import driversRouter from './routes/routes'; // Correct import path

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Ensure API routes are defined before static middleware
app.use('/api/v1/drivers', driversRouter);

// // Static files
// app.use(express.static(join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});

export default app;
