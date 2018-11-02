const express = require('express');
const router = express.Router();
const knex = require('../db/connection')

router.get('/', (req, res) => {
  knex('student')
  .orderBy('id', 'asc')
  .then(students => {
    res.json({ students: students })
  })
});

module.exports = router