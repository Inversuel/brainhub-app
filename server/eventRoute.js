const express = require('express')
const eventControllers = require('./eventController')
const router = express.Router()
router.get('/', eventControllers.eventGetAll)
router.post('/', eventControllers.eventPost)

// Export router
module.exports = router;