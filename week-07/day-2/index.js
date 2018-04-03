const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(bodyParser.json());

app.post('/api/endpoint', (req,res) => {
  console.log(req.body);
  res.json({
    message: 'OK',
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join (__dirname,'./index.html'));
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({
    message: `Hello ${name}!`,
  });
});

const mentors = [
  { name: 'Istvan', age: 30 },
  { name: 'Benocica', age: 42 },
  { name: 'Balazskaxd', age: 27 },    
];

const listMentors = ( req, res)  => {
  res.json(mentors);
};

app.get('/api/mentors', listMentors);

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1];

  if (mentor === undefined) {
    res.status(403);
    res.json({
      message: `No mentor with id ${req.params.mentorId}`,
    });
  } else {
   res.json(mentor);
  }
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
