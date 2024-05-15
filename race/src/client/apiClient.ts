// client/apiClient.ts



// Function to fetch data from the backend API
export async function fetchDataFromRapidApi() {
    try {
        console.log('Fetching data from RapidAPI...');
        const response = await fetch('/api/data', {
            headers: {
                Accept: 'application/json' // Add Accept header to indicate JSON response
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from backend');
        }
        const responseData = await response.json();
        console.log('Response data:', responseData); // Add console log to see the response data
        return responseData;
    } catch (error) {
        console.error('Error fetching data from backend server:', error);
        throw error;
    }
}
