export {};

import { fetchDataFromRapidApi } from './RapidApi';




async function testFetchData() {
    try {
        const data = await fetchDataFromRapidApi();
        console.log('Data from RapidAPI is JSON:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

testFetchData();
