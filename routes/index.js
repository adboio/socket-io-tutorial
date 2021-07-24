var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* POST new comment submissions */
router.post('/', (req, res, next) => {
  console.log(req.body);

  req.app.io.emit('new comment', {
    username: req.body.username,
    message: req.body.message
  })

  return res.sendStatus(200);
})

module.exports = router;
