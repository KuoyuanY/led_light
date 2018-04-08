const pg = require('pg');
const format = require('pg-format');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/led';

const pool = new pg.Pool({
    user: 'test',
    host: '127.0.0.1',
    database: 'led',
    password: 'testing',
    port: '5432'
});

const query = `insert into users values($1, $2, $3, $4)`;
const vals = [
    "a",
    "b",
    "c",
    "d"
];
pool.query(query, vals, (err, res) => {
    if(err){
        console.log("error...");
        console.log(err.detail || "unknown error");
    }else{
        if(res.rows.length == 0){
            console.log("failed logging in");
        }else{
            console.log("successfully logged in");
        }
    }
    pool.end();
});

function getvals(){
    return fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.warn(responseData);
        return responseData;
    })
    .catch(error => console.warn(error));
}

getvals().then(response => console.log(response));
