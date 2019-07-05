const express = require("express");
var ManagementClient = require('auth0').ManagementClient;

var management = new ManagementClient({
  domain: 'dev-luqm6uty.auth0.com',
  clientId: "8n2hhPWxduK9g90PTPYrA7bEEbkxwhK7",
  clientSecret: "pP6ufCzQv_Trm60G4Jhxz0tdxxMSuiLIwteCj9lHezLzZFgpRobSPK4o8t1jDr1h",
  scopes: "client:stats"
});

const router = express.Router();

router.post("/api/send-user", () => 
{
    
});

router.get("/api/get-user", () => 
{
    management.getUser()
});

router.get("/api/update-profile", () => {
    management.updateUserMetadata()
});

module.exports =  router;