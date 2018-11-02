const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3100;
let beersRoutes = require('./routes/beers');
let studentsRoutes = require('./routes/students');

app.get('/', (req, res) => res.json({
  "beers": `https://infinite-waters-48277.herokuapp.com/beers`,
  "students": `https://infinite-waters-48277.herokuapp.com/students`
}));

app.use(bodyParser.json());
app.use(cors()); 

app.use('/beers', beersRoutes);
app.use('/students', studentsRoutes);

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
};

function errorHandler(err, req, res, next) {
  console.error('NOPE, LOL', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
};

app.listen(port, () => console.log(`Your port is on ${port}`));
