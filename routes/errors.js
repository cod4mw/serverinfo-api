const express = require('express');
const router = express.Router();

/* GET list of error codes. */
router.get('/', async (req, res, next) => {
  res.json({
    1004: 'Game Server Offline'
  });

  next();
});

module.exports = router;
