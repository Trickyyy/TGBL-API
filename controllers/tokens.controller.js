const jwt = require('jsonwebtoken');

module.exports = {
    generate: (req, res, next) => {
        const { userId } = req.body;
        if(!userId) {
            res.status(401).send({
                success: false,
                msg: "Invalid auth token"
            });
        } else {
            const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET);
            res.status(200).send({
                success: true,
                msg: `Token generated for ${userId}`,
                userId: userId,
                token: token
            });
        };
    },
}