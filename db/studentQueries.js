function getAllStudents() {
    return knex('student')
    .orderBy('id', 'asc')
}

function getOneStudent(id) {
    return knex('student')
    .where('id', id)
}

function postStudent(body){
    return knex('student')
    .insert(body)
    .returning('*')
}

function putStudent(id,body){
    return knex('student')
    .where('id', id)
    .update(body)
    .returning('*')
}

function deleteStudent(id){
    return knex('student')
    .where('id', id)
    .delete()
    .returning('*')
}

module.exports = {
    getAllStudents,
    getOneStudent,
    postStudent,
    putStudent,
    deleteStudent
}