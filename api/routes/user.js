const express = require('express');
const router = express.Router();


router.get('/:email',function (req, res, next) {
    const email=req.params.email;
    res.status(200).json({
        email:email
    })
})

module.exports = router;