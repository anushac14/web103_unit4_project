import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomItems } from '../services/CustomItemService'; // Import your service to fetch data
import '../App.css';

const CarDetails = () => {
    const { id } = useParams(); // Get the car ID from the URL
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            const items = await getCustomItems(); // Fetch all items
            const foundCar = items.find(item => item.id === parseInt(id)); // Find the car by ID
            setCar(foundCar); // Set the found car
        };
        fetchCarDetails();
    }, [id]);

    if (!car) return <p>Loading...</p>; // Loading state

    return (
        <div>
            <h2>{car.name}</h2>
            <p>Price: ${car.price}</p>
            <p>Options: {car.options}</p>
        </div>
    );
};

export default CarDetails;
