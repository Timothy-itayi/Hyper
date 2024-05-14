// backend/server.ts

import express, { Request, Response } from 'express';
import http , { IncomingMessage } from 'http';

const app = express();
const port = 5000;

app.get('/api/data', (req: Request, res: Response) => {
    fetchDataFromWebService((data: string) => {
        res.json({ data });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function fetchDataFromWebService(callback: (data: string) => void) {
    const options: http.RequestOptions = {
        method: 'GET',
        hostname: 'hyprace-api.p.rapidapi.com',
        port: null,
        path: '/v1/circuits',
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your API key
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
