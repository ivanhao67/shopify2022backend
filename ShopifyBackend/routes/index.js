const express = require('express');
const router = express.Router();
const pug = require('pug');
const path = require('path');
let reqPath = path.join(__dirname,'../');
const inventory = require(reqPath+'config/items.json');

//route get request that renders the homepage
router.get('/', async (req, res) => {
  res.send(
    pug.renderFile(reqPath+'/views/home.pug', {
      inventory: inventory
    })
  );
});

module.exports = router;