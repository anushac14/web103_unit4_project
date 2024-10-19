import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomItems, updateCustomItem } from '../services/CustomItemService'; // Import services
import '../App.css';

const EditCar = () => {
    const { id } = useParams(); // Get the car ID from the URL
    const [car, setCar] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [options, setOptions] = useState('');

    useEffect(() => {
        const fetchCarDetails = async () => {
            const items = await getCustomItems();
            const foundCar = items.find(item => item.id === parseInt(id));
            setCar(foundCar);
            if (foundCar) {
                setName(foundCar.name);
                setPrice(foundCar.price);
                setOptions(foundCar.options);
            }
        };
        fetchCarDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCar = { name, price, options };
        await updateCustomItem(id, updatedCar); // Call the service to update the car
        // Optionally, redirect to the ViewCars page or show a success message
    };

    if (!car) return <p>Loading...</p>; // Loading state

    return (
        <div>
            <h2>Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Options:</label>
                    <textarea value={options} onChange={(e) => setOptions(e.target.value)} required />
                </div>
                <button type="submit">Update Car</button>
            </form>
        </div>
    );
};

export default EditCar;
