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

  router.post('/api/braintree/v1/customer-info', async (req, res) => {
    try {
      gateway.customer.find(req.body.id, (err, response) => {
        if (err)
          res.status(500).send(err)
        else
          res.send(response)
      })
    } catch (error) {
      res.status(500).send(err)
    }
  })

  router.post('/api/braintree/v1/create_customer', (req, res) =>
  {
    try{
      gateway.customer.create(
        {
          paymentMethodNonce: req.body.nonce,
          creditCard:
          {
            billingAddress:
            {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              streetAddress: req.body.streetAddress,
              locality: req.body.locality,
              region: req.body.region,
              postalCode: req.body.postalCode
            },
            options:
            {
              verifyCard: true
            }
          }
        },
        (err, result) => {
          if (err)
            res.status(500).send(err)
          else
          {
            res.send(result)
          }
        })
      
    }
    catch (error)
    {
      res.status(500).send(err)
    }
    
  });

  router.post('/api/braintree/update_customer', (req, res) =>
  {
    gateway.customer.update(req.body.id, {
      paymentMethodNonce: req.body.nonce,
      creditCard:
      {
        billingAddress:
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          streetAddress: req.body.streetAddress,
          locality: req.body.locality,
          region: req.body.region,
          postalCode: req.body.postalCode
        },
        options:
        {
          verifyCard: true
        }
      }

    })
  });


  module.exports = router;