const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links')


router.get('/', linksController.get);
router.post('/', linksController.post);
router.get('/:id', linksController.redirect);


// /* GET links listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
