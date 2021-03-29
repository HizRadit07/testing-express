const express = require('express');
const db= require('../db');
const {default:axios} = require('axios');

const router = express.Router();

router.get('/', async (req,res,next)=>{
    try{
        let results= await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:movieTitle', async (req,res,next)=>{
        var moviename = req.params.movieTitle;
        var apikey = 'c3a1cb82'; 
        axios.get(`http://www.omdbapi.com/?t=${moviename}&apikey=${apikey}`).then(response => {
            console.log(response.data);
            let results= {
                posterUrl: response.data.Poster
            };
            res.send(results);
        }).catch(err => {
            console.log(err);
            res.json('Movie not found');
        });

});
module.exports = router;