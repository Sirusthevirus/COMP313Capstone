var standard = require("../../app/controllers/standards.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/addStandard", standard.create);
  app.get("/standard", standard.allStandards);
  app.param("sId", standard.standardByID);
  app.route("/deleteStandard/:sId").delete(standard.delete);
  app.route("/standard/:sId").get(standard.byId);
};
