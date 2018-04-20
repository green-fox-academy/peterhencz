'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 8080;
const bodyParser = require('body-parser');


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'MacrotisOrientationExam'
});

app.set('views', 'views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.json());


app.get('/',(req, res) => { 
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/tourist', (req, res) => {
  const sqlAttractions = 'SELECT * FROM attractions';
  conn.query(sqlAttractions, (err, result) => {
    if (err) {
      res.status(400);
    } else {
      res.json({
        attractions: result
      })
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});