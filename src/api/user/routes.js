const router = require('express').Router();
const controllerUSer = require('./controller');

router.get('/', controllerUSer.getUsers);
router.post('/insert',controllerUSer.insertUser);
router.put('/update/:id', controllerUSer.updateUser);

module.exports = router;
