const express = require('express');
const router = express.Router();
let fs = require('fs');
const path = require('path');
let reqPath = path.join(__dirname,'../');
const inventory = require(reqPath+'config/items.json');

//post request to export csv file
router.post('/', async (req, res) => {
  const tocsv = [
    [
      "id",
      "name",
      "stock"
    ],
    ...inventory.map(item => [
      item.id,
      item.name,
      item.stock
    ])
  ].map(e => e.join(",")) .join("\n");
   fs.writeFile(reqPath+'config/output.csv', tocsv, 'utf8', function (err) {
    if (err) {
      console.log('Error');
    } else{
      console.log('Saved');
    }
  });
  res.redirect('/');
});

module.exports = router;