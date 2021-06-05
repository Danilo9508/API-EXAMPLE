const router = require('express').Router();

const controllerUSer = require('./controller');

router.get('/', controllerUSer.getUsers);

module.exports = router;
