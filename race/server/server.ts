// backend/server.ts

import express, { Request, Response } from 'express';
import http , { IncomingMessage } from 'http';

const app = express();
const port = 5000;

app.get('/api/drivers', (req: Request, res: Response) => {
    fetchDataFromRapidApi((data: string) => {
        res.json({ data });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function fetchDataFromRapidApi(callback: (data: string) => void) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '';
    const seasonId = '8ac404c1-7494-4b04-b8a6-ee97913de526'; // Replace with the desired season ID

    const options: http.RequestOptions = {
        method: 'GET',
        hostname: 'hyprace-api.p.rapidapi.com',
        port: null,
        // Update the path to include the desired season ID
        path: `/v1/seasons/${seasonId}/drivers`,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
        }
    };


    const req = http.request(options, (res: IncomingMessage) => {
        let data = '';

        res.on('data', (chunk: any) => {
            data += chunk;
        });

        res.on('end', () => {
            callback(data);
        });
    });

    req.end();

    req.on('error', (error: Error) => {
        console.error('Error fetching data:', error);
        callback(''); // Pass an empty string in case of error
    });
}
