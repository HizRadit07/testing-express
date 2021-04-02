const express = require('express');
const db= require('../db');
const {default:axios} = require('axios');

const router = express.Router();


router.get('/database', async (req,res,next)=>{
    try{
        let results= await db.allUser();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/movies/favorites', async (req,res,next)=>{
    try{
        let movieid = req.body.id;
        let movieTitle = req.body.title;
        let userid = req.body.user_id;
        let results= await db.getMovieTitleByUserID(movieid,movieTitle,userid);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/movies', async (req,res,next)=>{
    res.sendStatus(403);
});

router.get('/movies/:movieTitle', async (req,res,next)=>{
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

router.get('/movies/favorite/:userid', async (req,res,next)=>{
    try{
        var id = req.params.userid;
        let results= await db.getMovieTitleByUserID(id);
        var arrayposter=[];

        for (var i=0;i<results.length;i++){
        var moviename = results[i].title;
        var apikey = 'c3a1cb82';

        try{
        var posterresponse = await axios.get(`http://www.omdbapi.com/?t=${moviename}&apikey=${apikey}`);
        console.log(posterresponse.data);
        let movieposter= {
            posterUrl: posterresponse.data.Poster,
            ...results[i]
        };
        arrayposter.push(movieposter);
        }catch(err){            
        console.log(err);
        res.json('Movie not found');
        }

        // console.log(movieposter);
        // arrayposter.push(movieposter);

        // axios.get(`http://www.omdbapi.com/?t=${moviename}&apikey=${apikey}`).then(response => {
        //     console.log(response.data);
        //     let movieposter= {
        //         posterUrl: response.data.Poster,
        //         ...results[i]
        //     };
        //     console.log(movieposter);
        //     arrayposter.push(movieposter);
        // }).catch(err => {
        //     console.log(err);
        //     res.json('Movie not found');
        // });
    }
    console.log('test');
    res.send({posters:arrayposter});
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;