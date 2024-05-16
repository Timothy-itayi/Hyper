import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();

app.get('/api/data', async (req: Request, res: Response) => {
    try {
        const data = await fetchDataFromRapidApi();
        res.type('json');
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Failed to fetch data from RapidAPI');
    }
});

console.log('Fetching data from RapidAPI...');

export async function fetchDataFromRapidApi() {
    const options = {
        method: 'GET',
        url: 'https://hyprace-api.p.rapidapi.com/v1/seasons/8ac404c1-7494-4b04-b8a6-ee97913de526/drivers',
        headers: {
            'X-RapidAPI-Key': '28cc18cd86msh2d23644af92c4fcp12a35cjsn875e2a90b205',
            'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
        }
    };

    const response = await axios.request(options);
    
    if (response.status !== 200) {
        throw new Error('Error fetching data. Status code: ' + response.status);
    }

    // Check if the response content type is JSON
    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
    }

    return response.data;
}

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
