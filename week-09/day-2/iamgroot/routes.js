const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message !== undefined) {
    res.json ({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  } 
  else {
    res.status(400).json({
      error: 'I am Groot!'
    });
  }
});



module.exports = app;

app.get('/yonda', (req, res) => {
  if (req.query.message !== undefined) {
    res.json ({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  } else
  {
    res.json({
      "distance": req.query.distance,
      "time": req.query.time,
      "speed": req.query.distance / req.query.time
    })
  }
});