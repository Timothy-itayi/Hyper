import React, { useEffect, useState } from 'react';
import { fetchDataFromRapidApi } from '../client/apiClient';
import DriversStanding from '../models/driversStanding'; // Import the defined data structure

// Define the type for your driver props
type DriverProps = {
    id: string;
    name: string;
    team: string;
    points: number;
    position: number;
}

// Define the type for your component props
type DriversProps = {
    drivers: DriverProps[]; // Pass an array of driver data
}

const Drivers: React.FC<DriversProps> = ({ drivers }) => {
    // You can remove the useState hook for data since you're passing it directly as props

    return (
        <div>
            {/* Conditional rendering based on the data */}
            {drivers ? (
                <div>
                    <h1>Driver Standing</h1>
                    <ul>
                        {drivers.map(({ id, name, team, points, position }) => (
                            <li key={id}>
                                <div>Name: {name}</div>
                                <div>Team: {team}</div>
                                <div>Points: {points}</div>
                                <div>Position: {position}</div>
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
