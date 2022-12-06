var finishes = require("../controllers/finish.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/addFinish", finishes.create);
  app.get("/finishes", finishes.allFinishes);
  app.param("fId", finishes.finishesByID);
  app.route("/finishDelete/:fId").delete(finishes.delete);
  app.route("/finishById/:fId").get(finishes.byId);
};
