
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('beer', function (table){
        table.increments()
        table.string('name')
        table.string('imageUrl')
        table.integer('abv')
        table.string('review')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('beer')
};
