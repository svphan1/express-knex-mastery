const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

const { getAllStudents,
        getOneStudent,
        postStudent,
        putStudent,
        deleteStudent} = require('../db/studentQueries')
//Get all
router.get('/', (req, res) => {
  getAllStudents()
    .then(students => {
      console.log('here', students)
      res.json({ students: students })
    })
});

//Get one route
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  getOneStudent(id)
    .then(student => {
      res.json({ students: student })
    })
});

//Post
router.post('/', (req, res, next) => {
  const body = req.body

  postStudent(body)
    .then(student => {
      res.json({ student: student[0] })
    })
});

//put
router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  putStudent(id,body)
    .then(updatedStudent => {
      res.json({ student: updatedStudent[0] })
    })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id

  deleteStudent(id)
    .then(deletedStudent => {
      res.json({ student: deletedStudent[0] })
    })
});


module.exports = router