const express= require('express');
const apiRouter=require('./routes');


const app = express()

app.use(express.json());

app.get("/",(req,res) => {
    res.json('Welcome to myAPI, this is a mock API i made for BukitVista Assesment')
})

app.use('/myAPI',apiRouter);


const port = process.env.PORT || '3000'; 
app.listen(port,()=>{
    console.log('Server is running on port: '+ port);
})