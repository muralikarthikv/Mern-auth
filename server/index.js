const express = require('express')
const dotenv=require('dotenv').config()
const cors= require('cors')
const {mongoose} =require('mongoose')
const app = express();


//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log('Database not connected',err))

app.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

//middlewares
app.use(express.json());
app.use('/',require('./routes/authRoutes'))

const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))