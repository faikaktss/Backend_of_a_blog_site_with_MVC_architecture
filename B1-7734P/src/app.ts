import express from 'express';
import dotenv from 'dotenv';
import categoryRoutes from './routers/categoryRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/categories', categoryRoutes);

app.listen(process.env.PORT ||3000 ,()=>{
    console.log('Sunucu ayakta');
})