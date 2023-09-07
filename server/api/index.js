<<<<<<< HEAD
const router = require('express').Router();
module.exports = router;

router.use((req, res, next) => {
  const error = new Error('Not Found');
=======
const router = require("express").Router();
module.exports = router;

// router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
>>>>>>> main
  error.status = 404;
  next(error);
});
