var connection = require('./connection');

function User() {

  this.get = function(res) {
    console.log("Get all user");
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}
module.exports = new User();
