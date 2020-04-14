
exports.up = function(knex) {
//builds the table
  //vin- primary key, increment
  //make - Car's make, string-text
  //Model - Car's model, string-text
  //mileage - decimal
  //transmission type - string-text
  //title - clean, salvage, etc. string-text
  return knex.schema.createTable("cars", table => {
  table.increment();
  table.string("vin", 128).unique().notNulllable();
  table.string("make", 128).notNulllable();
  table.string("model", 128).notNulllable();
  table.integar("mileage", 128).notNulllable();
  table.text("transmission_type", 128);
  table.text("title", 128);
  })
};

exports.down = function(knex) {
    //destroys the table
    return knex.schema.dropTableIfExists("cars");
};
