var user = require('../models/user');

module.exports = {
  configure: function(app) {
    app.get('/user/', function(req, res) {
      user.get(res);
    });

    app.get('/user/read/:id/', function(req, res) {
      user.read(res);
    });

    app.post('/user/create', function(req, res) {
      user.create(req.body, res);
    });

    app.put('/user/update', function(req, res) {
      user.update(req.body, res);
    });

    app.delete('/user/delete/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });
  }
};
