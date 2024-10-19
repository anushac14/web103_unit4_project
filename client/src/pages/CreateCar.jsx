import React, { useState } from 'react';
import { createCustomItem } from '../services/CustomItemService'; // Import the service for creating items
import '../App.css';

const CreateCar = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [options, setOptions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCar = { name, price, options };
        await createCustomItem(newCar); // Call the service to create a new car
        setName('');
        setPrice('');
        setOptions('');
        // Optionally, redirect to the ViewCars page or show a success message
    };

    return (
        <div>
            <h2>Create New Car</h2>
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
                <button type="submit">Create Car</button>
            </form>
        </div>
    );
};

export default CreateCar;
