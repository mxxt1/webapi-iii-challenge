const express = require('express');
const userRouter = require('./users/userRouter.js');
const portRouter = require('./posts/postRouter');
//after mvp, add helmet and morgan

const server = express();


server.use(logger);



server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const newDate = new Date().toISOString();
  // console.log(newDate);
  console.log(`${req.method} to ${req.get('host')}${req.originalUrl} at ${newDate}`);
  next();
};

module.exports = server;
