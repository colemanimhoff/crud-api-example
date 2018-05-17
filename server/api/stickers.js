const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    response.json({
        message: 'success!'
    })
})

module.exports = router