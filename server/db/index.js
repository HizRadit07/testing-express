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

chirprdb.all = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM favorite_movies_table', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
chirprdb.getMovieTitle = (movietitle)=>{
    return new Promise((resolve,reject)=>{
        pool.query('SELECT title FROM favorite_movies_table WHERE title = ?', movietitle,(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = chirprdb;