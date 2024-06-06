const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('server is running!');
});

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});