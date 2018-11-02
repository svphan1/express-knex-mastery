
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', function (table){
        table.increments()
        table.string('name')
        table.string('cohort')
    })   
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('student')

};
