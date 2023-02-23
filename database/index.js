const mysql = require('mysql2')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist'
});

const dbRead = (callback) => {

  con.connect(function(err) {
    if (err) {
      console.log('err: ', err);
    }
    console.log('connection to db successful');
    con.query('SELECT * FROM data', (err, result) => {
      if (err) {
        console.log('err: ', err);
      }
      callback(result);
    })
  });

};

const dbCreate = (cow, callback) => {
  var query = `INSERT IGNORE INTO data (name, description) VALUES ("${cow.name}", "${cow.description}")`;
  con.connect(function(err) {
    if (err) {
      console.log('err: ', err);
    }
    console.log('connection to db successful');
    con.query(query, (err, result) => {
      if (err) {
        console.log('err: ', err);
      }
      callback();
    })
  });
};

const createTable = () => {
  con.connect(function(err) {
    if (err) {
      console.log('err: ', err);
    }
    con.query('CREATE TABLE data (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) UNIQUE, description varchar(255))', (err) => {
      console.log(err);
    })
  })
}

module.exports = { dbRead, dbCreate, createTable };