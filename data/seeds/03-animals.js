
exports.seed = function(knex, Promise) {
  return knex('animals').insert([
    // species_id must match valid species
    { name: "Snuffles", species_id: 1 },
    { name: "Cornelius", species_id: 2 },
    { name: "Athena", species_id: 3 },
    { name: "Ares", species_id: 3 },
    { name: "Snelby", species_id: 4 },
    { name: "Gwendolyn", species_id: 5 },
    { name: "Archebald", species_id: 6 },
    { name: "Polonius", species_id: 1 },
    { name: "Augusta", species_id: 4 },
    { name: "Stephen", species_id: 7 },
    { name: "Rocky", species_id: 8 },
    // no id 19 for species
    // { animal_name: "Bellatrix", species_id: 19 }
  ]);
};
