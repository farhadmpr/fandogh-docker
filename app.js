'use strict';

const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello Farhad</h1> \n');
});

app.listen(80);
