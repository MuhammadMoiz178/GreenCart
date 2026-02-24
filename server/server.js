import cookieParser from 'cookie-parser';
import express from 'express'
import cors from "cors"
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/User.route.js';
import sellerRouter from './routes/seller.route.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/product.route.js';

const app = express()
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()
//Allow Multiple Origins
const allowedOrigins = ['http://localhost:5173']

// Middleware Configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:allowedOrigins,credentials:true}))


app.get('/',(req,res)=>res.send("Api is working"))
app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})