const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

//Get all route
router.get('/', (req, res) => {
  knex('beer')
  .orderBy('id', 'asc')
  .then(beers => {
    res.json({ beers: beers })
  })
});

module.exports = router