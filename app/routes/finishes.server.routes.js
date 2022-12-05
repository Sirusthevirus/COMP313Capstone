var finishes = require("../../app/controllers/finishes.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/addFinishes", finishes.create);
  app.get("/finishes", finishes.allFinishes);
  app.param("sId", finishes.finishesByID);
  app.route("/deleteFinishes/:sId").delete(finishes.delete);
  app.route("/finishes/:sId").get(finishes.byId);
};
