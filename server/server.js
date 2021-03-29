const express= require('express');
const apiRouter=require('./routes');


const app = express()

app.use(express.json());

app.use('/api/movies',apiRouter);


const port = process.env.PORT || '3000'; 
app.listen(port,()=>{
    console.log('Server is running on port: '+ port);
})