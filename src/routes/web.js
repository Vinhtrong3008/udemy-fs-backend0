const express = require('express');
const router = express.Router();


//khai baos routes
router.get('/', (req, res) => {
  res.send('Hello World! nodemon')
})
router.get('/abc', (req, res) => {
  res.render('example.ejs')
})

module.exports = router