export {};

import { fetchDataFromRapidApi } from './server';




async function testFetchData() {
    try {
        const data = await fetchDataFromRapidApi();
        console.log('Data from RapidAPI:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

testFetchData();
