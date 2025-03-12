const router = require('express').Router()

router.get('/', require('./contacts'));

module.exports = router
