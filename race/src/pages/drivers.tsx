import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Driver } from '../models/driversStanding';

const Drivers: React.FC = () => {
    const [data, setData] = useState<Driver[] | null>(null); // Use Driver[] type

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3000/api/v1/drivers');
                setData(result.data); // Update state with the fetched drivers
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h1>Driver Standing</h1>
                    <ul>
                        {data.map((driver) => (
                            <li key={driver.id}>
                                <div>Name: {`${driver.firstName} ${driver.lastName}`}</div>
                                <div>Team: {driver.constructors[0].name}</div> {/* Assuming there's only one constructor */}
                                <div>Points: {driver.standing.points}</div>
                                <div>Position: {driver.standing.position}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Drivers;
