const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');

const conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database : '4c3',
});

conn.query('SELECT * FROM colors;', function(err, rows) {
  console.log('Data received from Database: \n');
  console.log(rows);
});

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/', express.static('static'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json ({
    message: 'yolo world',
  })
});

app.get('/colors', function(req, res) {
  conn.query('SELECT * FROM colors;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(200).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM colors;';
  let queryInputs = [];
  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.render('index', {
      colors: result,
    });
  });
});

app.post('/colors', (req, res) => {
  console.log(req.body);
  const sql = 'INSERT INTO colors (hexcode, tag1, tag2, tag3) VALUES (?, ?, ?, ?);';
  const queryInputs = [req.body.hexcode, req.body.tag1, req.body.tag2, req.body.tag3];
  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json({
        message: 'item has been created,',
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
