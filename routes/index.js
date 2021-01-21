var express = require("express");
var router = express.Router();
const ControlModel = require("../models/control.model");
const UserStatusModel = require("../models/userstatus.model");
const THModel = require("../models/th.model");
const anc = require("chart.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index");
});

router.get("/chart", async function (req, res, next) {
  const dataControl = await ControlModel.findOne({
    _id: "5fa7dee2d608ce50b8057128",
  });
  res.render("chart", { title: "Express", dataControl });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.post("/", async function (req, res, next) {
  const led = req.body.led;
  const dataControl = await ControlModel.updateOne(
    { _id: "5fa7dee2d608ce50b8057128" },
    { Light: led }
  );
  await UserStatusModel.updateOne(
    { id: "5fa7dee2d608ce50b8057128" },
    { Status: 1 }
  );
  res.redirect("/");
});

router.get("/json", function (req, res, next) {
  res.json({ name: "test", data: 1 });
});
module.exports = router;
