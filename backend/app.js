import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
const app = express();
import connectDB from './db/db.js';
import userRoutes from './routes/user_routes.js'

connectDB();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/' , (req,res) =>{
    res.send("hello world")
})
app.use('/user', userRoutes);



export default app;