const express = require('express');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter');
const validateUserId = require('./users/userRouter')
const validateUser = require('./users/userRouter')
const validatePost = require('./users/userRouter')
//after mvp, add helmet and morgan

const server = express();


//custom middleware
function logger(req, res, next) {
  const newDate = new Date().toISOString();
  // console.log(newDate);
  console.log(`${req.method} to ${req.get('host')}${req.originalUrl} at ${newDate}`);
  next();
};


server.use(logger);
server.use(express.json());
// server.use(validateUser);
// server.use(validateUserId);
// server.use(validatePost);


// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`)
// });

server.use('/',userRouter);

server.use('/api/users', userRouter);


module.exports = server;
