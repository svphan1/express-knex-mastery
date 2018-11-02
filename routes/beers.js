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

//Get one route
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  knex('beer')
    .where('id', id)
    .then(beer => {
      res.json({ beers: beer })
    })
});

//Post

router.post('/', (req, res, next) => {
  const body = req.body

  knex('beer')
    .insert(body)
    .returning('*')
    .then(beer => {
      res.json({ beer: beer[0] })
    })
});

//put
router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('beer')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedBeer => {
      res.json({ beer: updatedBeer[0] })
    })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('beer')
    .where('id', id)
    .delete()
    .returning('*')
    .then(deletedBeer => {
      res.json({ beer: deletedBeer[0] })
    })
});

module.exports = router