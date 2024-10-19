// server.js
import express from 'express';
import cors from 'cors';
import './config/dotenv.js';
import customItemsRoutes from './routes/customItemsRoutes.js';

const app = express();
app.use(cors());

app.use('/items', customItemsRoutes);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
