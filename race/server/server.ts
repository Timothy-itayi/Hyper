import express, { Request, Response } from 'express';
import request from 'request';

const app = express();

app.get('/api/data', (req: Request, res: Response) => {
    fetchDataFromRapidApi((data: any) => {
        res.setHeader('Content-Type', 'application/json')
        res.json({ data });
        console.log(data)
    });
});
console.log('Fetching data from RapidAPI...')
function fetchDataFromRapidApi(callback: (data: any) => void) {
    const options = {
        method: 'GET',
        url: 'https://hyprace-api.p.rapidapi.com/v1/drivers',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
        }
    };

    request(options, function (error: any, response: any, body: any) {
        if (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data from RapidAPI');
        }

        if (response.statusCode !== 200) {
            console.error('Error fetching data. Status code:', response.statusCode);
            throw new Error('Failed to fetch data from RapidAPI');
        }

        // Check if the response content type is JSON
        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.includes('application/json')) {
            console.error('Error: Response is not JSON');
            throw new Error('Response is not JSON');
        }

        // Parse the JSON response
        const responseData = JSON.parse(body);
        callback(responseData);
    });
}

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running...');
});
