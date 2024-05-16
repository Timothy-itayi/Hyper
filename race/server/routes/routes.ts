import express, { Request, Response } from 'express';
import { fetchDataFromRapidApi } from '../RapidApi';
import { ResponseData, Driver } from '../models/driversStanding';

const router = express.Router();

router.get('/api/v1/drivers', async (req: Request, res: Response) => {
    console.log('API endpoint /api/v1/drivers was called');
    try {
        // Fetch data from RapidAPI
        const data: ResponseData = await fetchDataFromRapidApi();
        console.log('Fetched data:', data);

        // Validate the fetched data
        data.items.forEach((item: Driver) => {
            if (!item.firstName || !item.lastName || !item.standing || !item.constructors) {
                throw new Error('Fetched data items are invalid');
            }
        });

        // Ensure the response content type is JSON
        res.setHeader('Content-Type', 'application/json');
        
        // Send JSON response containing fetched data items
        res.json(data);
    } catch (error) {
        // Handle errors related to fetching data
        console.error('Error fetching data:', error);
        res.status(500).send('Failed to fetch data from RapidAPI');
    }
});


export default router;
