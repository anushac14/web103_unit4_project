import React, { useEffect, useState } from 'react';
import { getCustomItems, deleteCustomItem } from '../services/CustomItemService';

const CustomItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getCustomItems();
            setItems(data); // Populate items from backend
        };
        fetchItems();
    }, []);

    const handleDelete = async (id) => {
        await deleteCustomItem(id);
        setItems(items.filter(item => item.id !== id)); // Update UI after delete
    };

    return (
        <div>
            <h1>Custom Cars</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomItemList;
