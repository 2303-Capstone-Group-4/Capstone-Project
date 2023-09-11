const router = require('express').Router();
module.exports = router;

router.use("/tier1", require("./tier1"));
router.use("/tier2", require("./tier2"));
router.use("/tier3", require("./tier3"));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
