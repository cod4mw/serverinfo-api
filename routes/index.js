const express = require('express');
const source = require('gamedig');
const router = express.Router();

/* GET home page. */
router.get('/:address', async (req, res, next) => {
  try {
    let address = req.params.address;
    address = address.split(':');
    let ip = address[0];
    let port = address[1] || '28960';


    let data = await source.query({
      type: 'cod4',
      host: ip,
      port: port
    }).catch(() => {});

    let serverData = {
      host: ip,
      port: port
    };
    if (data) {
      serverData.data = data;
    }


    res.json(serverData);
  }
  catch (e) {
    next(e);
  }
});

module.exports = router;
