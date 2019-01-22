function getAllBeers() {
    return knex('beer')
    .orderBy('id', 'asc')
}

function getOneBeer(id) {
    return knex('beer')
    .where('id', id)
}

function postBeer(body){
    return knex('beer')
    .insert(body)
    .returning('*')
}

function putBeer(id,body){
    return knex('beer')
    .where('id', id)
    .update(body)
    .returning('*')
}

function deleteBeer(id){
    return knex('beer')
    .where('id', id)
    .delete()
    .returning('*')
}

module.exports = {
    getAllBeers,
    getOneBeer,
    postBeer,
    putBeer,
    deleteBeer
}