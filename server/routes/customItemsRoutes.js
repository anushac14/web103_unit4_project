import express from 'express';
import CustomItemsController from '../controllers/customItemsController.js';

const router = express.Router();

router.get('/', CustomItemsController.getCustomItems); // Get all items
router.post('/', CustomItemsController.createCustomItem); // Create a new item
router.put('/:id', CustomItemsController.updateCustomItem); // Update an existing item
router.delete('/:id', CustomItemsController.deleteCustomItem); // Delete an item

export default router;
