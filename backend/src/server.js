import express from 'express';
import cors from 'cors';
import userRoutes from "../routes/userRoutes.js";
import uploadRoutes  from '../routes/uploadRoutes.js';

const app=express();
const port=3000;
app.use(cors());
app.use(express.json());


app.use("/api",userRoutes);
app.use("/uploadapi",uploadRoutes);


app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})



