const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      error: 'Please provide an input!',
    });
  } else { 
    res.json( {
      received: req.query.input,
      result: req.query.input * 2
    });
  };
});

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  
  if (req.query.name === undefined) {
    res.json( { 
    error: 'Please provide a name!',
    });
  } else if (req.query.title === undefined) {
    res.json ({
      error: 'Please provide a name!',
    });
  } else { 
    res.json({
      message: `Oh, hi there ${name}, my dear ${title}!`,
    });
  };
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable === undefined) {
    res.status(404);
    res.json({
      message: '404',
    });
  } else {
    res.json({
      message: req.params.appendable + 'a',
    });  
  };
});

app.post('dountil/:what', (req, res) => {
  const what = req.params.what;
  const number = req.body.until;

  if (what === undefined) {
    res.json({
      message: 'Please provide a number!',
      });
  } else if (what === 'sum') {
    var sumOfNumbers = 0;

    res.json({
      "result" : sumOfNumbers
    })  
  }
  console.log(sumOfNumbers);
  res.end();
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
