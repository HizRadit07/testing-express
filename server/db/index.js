const mysql= require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'BpWmCpk9VX',
    user: 'sql6401962',
    database: 'sql6401962',
    host: 'sql6.freemysqlhosting.net',
    port: '3306'
});

let chirprdb = {};

chirprdb.allUser = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM user_table', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

chirprdb.allFavorite = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM favorite_movies_table', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

chirprdb.getMovieTitleByUserID = (userid)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT title FROM favorite_movies_table WHERE user_id = ?', userid,(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

chirprdb.getMovieTitleByUserID = (value1,value2,value3)=>{
    return new Promise((resolve,reject)=>{
        pool.query('INSERT INTO favorite_movies_table (id,title,user_id) VALUES (?)', [value1,value2,value3],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = chirprdb;