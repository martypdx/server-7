require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
  DROP TABLE IF EXISTS profile;
  DROP TABLE IF EXISTS artist;
  DROP TABLE IF EXISTS album;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });