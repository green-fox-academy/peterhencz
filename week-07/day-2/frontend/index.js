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
  
  if (name === undefined) {
    res.json( { 
    error: 'Please provide a name!',
    })
  } 
  else if (title === undefined) {
    res.json ({
      error: 'Please provide a title!',
    })
  } else { 
    res.json ({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    })
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable === undefined) {
    res.status(404);
    res.json({
      message: '404',
    });
  } else {
    res.json({
      appended: req.params.appendable + 'a',
    });  
  };
});

app.post('/dountil/:what', (req, res) => {
  const what = req.params.what;
  const addNumber = req.body.until;

  if (what === undefined) {
    res.json({
      error: 'Please provide a number!',
      });
  } else if (what === 'sum') {
    let sumOfNumbers = 0;
    for (let i = 0; i <= addNumber; i++) {
      sumOfNumbers += i;
    }
    res.json({
      result : sumOfNumbers
    })  
  }
  else if(what === 'factor') {
    let sumOfNumbers = 0;
  }
  console.log(sumOfNumbers);
  res.end();
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
