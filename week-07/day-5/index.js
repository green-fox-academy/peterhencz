const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use('/', express.static('static'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  console.log('Hello World!')
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

