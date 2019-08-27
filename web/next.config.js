require("dotenv").config();
const withCSS = require('@zeit/next-css')

const path = require("path");
const Dotenv = require("dotenv-webpack");
const withSASS = require('@zeit/next-sass')

module.exports = withCSS({
  cssModules: true,
  webpack: config => {
    config.plugins = config.plugins || [];
    
    config.plugins = [
      ...config.plugins,
      
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
});
   
