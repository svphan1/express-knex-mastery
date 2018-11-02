const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

//Get all
router.get('/', (req, res) => {
  console.log('hitting route')
  knex('student')
    .orderBy('id', 'asc')
    .then(students => {
      console.log('here', students)
      res.json({ students: students })
    })
});

//Get one route
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  knex('student')
    .where('id', id)
    .then(student => {
      res.json({ students: student })
    })
});

//Post
router.post('/', (req, res, next) => {
  const body = req.body

  knex('student')
    .insert(body)
    .returning('*')
    .then(student => {
      res.json({ student: student[0] })
    })
});

//put
router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('student')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedStudent => {
      res.json({ student: updatedStudent[0] })
    })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('student')
    .where('id', id)
    .delete()
    .returning('*')
    .then(deletedStudent => {
      res.json({ student: deletedStudent[0] })
    })
});


module.exports = router