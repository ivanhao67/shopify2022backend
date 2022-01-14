const express = require('express');
const router = express.Router();
let fs = require('fs');
const path = require('path');
let reqPath = path.join(__dirname,'../');
const inventory = require(reqPath+'config/items.json');

//Route post request that is used to delete an item
//Will remove the item from the inventory and update all item ids by decrementing all items after the deleted
//updates json file 
router.post('/', async (req, res) => {
  if(req.body.id==inventory.length){
    inventory.splice(req.body.id-1,1);
  }else{
    for(let index = req.body.id;index<inventory.length;index++){
      inventory[index].id = inventory[index].id - 1;
    }
    inventory.splice(req.body.id-1,1);
  }
  fs.writeFileSync(reqPath+'config/items.json',JSON.stringify(inventory));
  res.redirect('/');
});

module.exports = router;