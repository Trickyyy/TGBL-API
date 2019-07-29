const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const authToken = req.token;
    if(!authToken) {
        res.status(400).send({
            success: false,
            msg: "No auth token specified"
        });
    };
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send({
                success: false,
                msg: "Invalid auth token"
            });
        } else {
            req.decoded = decoded;
            next();
        };
    });
};

module.exports = token;