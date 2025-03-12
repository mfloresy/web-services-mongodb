const router = require('express').Router()

const contactsController = require('../controllers/controller-contacts')

router.get('/', contactsController.getAll)

router.get('/:idContact', contactsController.getOne)

module.exports = router