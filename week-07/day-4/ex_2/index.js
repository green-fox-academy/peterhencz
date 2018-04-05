const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const name = req.query.name || 'Guest';
  res.render('home', {
    message: `${name}!`,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

