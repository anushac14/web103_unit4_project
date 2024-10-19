// customItemsController.js
import { pool } from '../config/database.js';

export const getCustomItems = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM custom_items ORDER BY id ASC');
        res.status(200).json(results.rows)
    } catch (error) {
        console.log(error)
        res.status(409).json( { error: error.message } )
    }
};

export const createCustomItem = async (req, res) => {
    const { name, price, options } = req.body;
    await pool.query(
        'INSERT INTO custom_items (name, price, options) VALUES ($1, $2, $3)',
        [name, price, options]
    );
    res.status(201).send('Custom Item Created');
};

export const updateCustomItem = async (req, res) => {
    const { id } = req.params;
    const { name, price, options } = req.body;
    await pool.query(
        'UPDATE custom_items SET name=$1, price=$2, options=$3 WHERE id=$4',
        [name, price, options, id]
    );
    res.send('Custom Item Updated');
};

export const deleteCustomItem = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM custom_items WHERE id=$1', [id]);
    res.send('Custom Item Deleted');
};

export default {
    getCustomItems,
    updateCustomItem,
    deleteCustomItem
};