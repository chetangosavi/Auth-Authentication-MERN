import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDb from './config/db';
import authRoutes from './routes/authRoutes';
import { PORT } from './constants/constants';

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('dev'))


connectDb();

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})