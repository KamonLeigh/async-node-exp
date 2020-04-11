const express = require('express');
const fs = require('fs');
const fs = require('fs').promises
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {

    // let rawData = fs.readFileSync(datafile, 'utf8');

   getClothingData((err, data) => {
      if(err) {
        console.log(err);
      } else {

        res.send(data);
      }
    });

  });

  function getClothingData(cb) {
    fs.readFile(datafile, 'utf8', (err, data) => {
      if (err) {
        cb(err, null);
      } else {
         cb(undefined, JSON.parse(data));
      }
    });
  }

module.exports = router;
