const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/oauth', (req, res) => {
  res.send({
    code: req.query.code,
  });
});

app.listen(port, () => {
  console.log(`Listening! On port ${port}`);
});
