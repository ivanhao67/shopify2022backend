const express = require('express');
const router = express.Router();
let fs = require('fs');
const path = require('path');
let reqPath = path.join(__dirname,'../');
const inventory = require(reqPath+'config/items.json');

//Route post request that is used to create an item
//will create a new object with given params and update json file
router.post('/', async (req, res) => {
  let newitem = {};
  newitem.id = inventory.length+1;
  newitem.name = req.body.itemname;
  newitem.stock = Number(req.body.qty);
  inventory.push(newitem);
  fs.writeFileSync(reqPath+'config/items.json',JSON.stringify(inventory));
  res.redirect('/');
});

module.exports = router;