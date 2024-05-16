// testFetchData.ts
export {};
import { fetchDataFromClient } from './apiClient';

async function testFetchData() {
    try {
        const data = await fetchDataFromClient();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testFetchData();
//client folder