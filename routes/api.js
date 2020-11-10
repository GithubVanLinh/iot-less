var express = require('express');
var router = express.Router();
const ControlModel = require('../models/control.model');
const UserStatusModel = require('../models/userstatus.model');
const THModel = require('../models/th.model');


router.get('/sensors', async function (req, res, next) {
  const sensorData = await THModel.get("5fa7dee2d608ce50b8057128");
  // console.log(sensorData);
  res.json(sensorData);
});

router.get('/:id', async function(req, res, next){
  const id = req.params.id;
  console.log(id);
  const userStatus = await UserStatusModel.findOne({id: id});
  if(!userStatus){
    console.log("not vaild");
    res.send({status: 404, data:"id not vaild"});
  }else{
    res.json(userStatus.Status);
  }
});


/* GET home page. */
router.get('/', async function (req, res, next) {
  const dataControl = await ControlModel.findOne({_id: "5fa7dee2d608ce50b8057128"});
  await UserStatusModel.updateOne({id: "5fa7dee2d608ce50b8057128"}, {Status: 0});
  res.json({data: dataControl});
});

router.post('/', function(req, res, next){
    const body = req.body;
    body.id = "5fa7dee2d608ce50b8057128";
    body.date = Date.now();
    console.log(body);
    res.send(THModel.add(body));
});
module.exports = router;
