var user = require('../models/user');

module.exports = {
  configure: function(app) {
    app.get('/user/', function(req, res) {
      user.get(res);
    });

    app.get('/api/user/read/:id/', function(req, res) {
      user.read(res);
    });

    app.post('/api/user/create', function(req, res) {
      user.create(req.body, res);
    });

    app.put('/api/user/update', function(req, res) {
      user.update(req.body, res);
    });

    app.delete('/api/user/delete/:id/', function(req, res) {
      user.delete(req.params.id, res);
    });
  }
};
