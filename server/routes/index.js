const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: 'HELLO WORLD' });
});

module.exports = router;
