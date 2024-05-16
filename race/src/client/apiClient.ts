// apiClient.ts

import ResponseData from '../models/driversStanding';

const apiUrl = 'http://localhost:3000/api/v1/drivers';

export async function fetchDataFromClient(): Promise<ResponseData> {
    try {
        console.log('Fetching data from backend...');
        const response = await fetch(apiUrl, {
            headers: {
                Accept: 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from backend');
        }
        const responseData = await response.json() as ResponseData; // Explicitly cast the response to ResponseData
        console.log('Response data:', responseData); // Add console log to see the response data
        return responseData;
    } catch (error) {
        console.error('Error fetching data from backend server:', error);
        throw error;
    }
}
