const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join (__dirname,'./index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      error: 'Please provide an input!',
    })
  } else { 
    res.json( {
      received: req.query.input,
      result: req.query.input * 2
    });
  };
});

app.get('/greeter', (req, res) => {
  const name = req.query.name || 'Stranger';
  const name = req.query.title || 'unkown';
  res.json({
    welcome message: `Oh, hi there ${name}, my dear ${title}!`
  });
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});

