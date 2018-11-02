
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('beer', function (table){
        table.increments()
        table.string('name')
        table.string('imageUrl')
        table.float('abv')
        table.text('review')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('beer')
};
