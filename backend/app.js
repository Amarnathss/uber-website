import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
const app = express();
import connectDB from './db/db.js';
import userRoutes from './routes/user_routes.js'
import cookieParser from 'cookie-parser';
import captainRoutes from './routes/captain_routes.js'

connectDB();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get('/' , (req,res) =>{
    res.send("hello world")
})
app.use('/user', userRoutes);
app.use('/captain',captainRoutes);



export default app;