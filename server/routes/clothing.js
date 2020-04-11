const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {

    // let rawData = fs.readFileSync(datafile, 'utf8');

    fs.readFile(datafile, 'utf8', (err, data) => {
      if (err) {
        console.log(error);
      } else {
        const clothingData = JSON.parse(data);
        res.send(clothingData)
      }
    });

  });

module.exports = router;
