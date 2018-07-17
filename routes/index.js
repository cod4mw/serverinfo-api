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
      serverData.data = {
        name: data.name,
        map: data.map,
        gametype: data.raw.g_gametype,
        protected: data.password,
        currentPlayers: data.players.length,
        maxPlayers: parseInt(data.maxplayers),
        fsgame: data.raw.fsgame,
        version: data.raw.shortversion,
        voice: data.raw.sv_voice,
        mapStartTime: data.raw.g_mapStartTime,
        uptime: data.raw.uptime,
        Admin: data.raw._Admin,
        location: data.raw._Location
      }
    }


    res.json(serverData);
  }
  catch (e) {
    next(e);
  }
});

module.exports = router;
