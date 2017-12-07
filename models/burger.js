var orm = require("../config/orm.js");

var burgerModel = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(input, cb) {
    orm.create("burgers", input, function(res) {
    });
  }
,
  update: function(id, cb) {
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  }
};

module.exports = burgerModel;