// require express
const express = require('express');
const router = express.Router();

router.use(require('./roles'));

router.use(require('./department'));

router.use(require('./employee'));

// export the code
module.exports = router;