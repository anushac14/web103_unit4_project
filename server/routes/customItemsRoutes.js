// customItemsRoutes.js
import express from 'express';
import CustomItemsController from '../controllers/customItemsController.js';

const router = express.Router();

router.get('/', CustomItemsController.getCustomItems);
router.put('/items/:id', CustomItemsController.updateCustomItem);
router.delete('/items/:id', CustomItemsController.deleteCustomItem);

export default router;
