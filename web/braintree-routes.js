const express = require("express");
const gateway = require('./gateway');


const router = new express.Router();

router.get('/api/braintree/v1/getToken', async (req, res) => {
    try {
      gateway.clientToken.generate({}, (err, response) => {
        if (err)
          res.status(500).send(err)
        else
          res.send(response)
      })
    } catch (error) {
      res.status(500).send(err)
    }
  })

  module.exports = router;