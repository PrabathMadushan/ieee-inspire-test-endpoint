const express = require('express');
const router = express.Router();

router.get('/',function (req, res, next) {
    res.status(200).json({
        message:"get request in product route"
    })
})

module.exports = router;