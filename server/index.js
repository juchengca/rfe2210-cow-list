const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// read all cow data
app.get('/api/cows', (req, res) => {
  db.dbRead((result) => {
    res.send(result);
  });
});

// create new cow data
app.post('/api/cows', (req, res) => {
  var cows = req.body;
  console.log(cows);
  db.dbCreate(cows, () => {
    res.send();
  })
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
