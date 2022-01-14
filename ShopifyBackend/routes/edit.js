const express = require('express');
const router = express.Router();
let fs = require('fs');
let pug = require('pug');
const path = require('path');
let reqPath = path.join(__dirname,'../');
const inventory = require(reqPath+'config/items.json');

//get request to render the details of the item requested
router.get('/:id', async (req, res) => {
  res.send(
    pug.renderFile(reqPath+'/views/item.pug', {
      item: inventory[req.params.id-1]
    })
  );
});
//post request to update the item with the new params given
router.post('/:id', async (req, res) => {
  inventory[req.body.id-1].name = req.body.itemname;
  inventory[req.body.id-1].stock = Number(req.body.qty);
  fs.writeFileSync(reqPath+'config/items.json',JSON.stringify(inventory));
  res.redirect('/');
});

module.exports = router;