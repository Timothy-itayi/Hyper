
// client/apiClient.ts

// Function to fetch data from the backend API
export async function fetchDataFromRapidApi() {
    try {
        const response = await fetch('/api/drivers');
        if (!response.ok) {
            throw new Error('Failed to fetch data from backend');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data from backend:', error);
        throw error;
    }
}
