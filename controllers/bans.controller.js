const dbController = require('./db.controller');

module.exports = {
    getBanned: (req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        const user = req.body.user;
        if(!user) {
            res.status(401).send({
                success: false,
                msg: "No user specified"
            });
        } else {
            const isBanned = dbController.selectSingle(db, "SELECT * FROM bans WHERE user = $1 AND isBanned = true;", user);
            if(isBanned) {
                res.status(200).send({
                    success: true,
                    isBanned = true,
                    data: isBanned
                });
            } else {
                res.status(200).send({
                    success: true,
                    isBanned = false
                });
            };
        };
    },
    getBans: (req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        const bansList = dbController.selectMultiple(db, "SELECT * FROM bans;");
        res.status(200).send({
            success: true,
            data: bansList
        });
    },
}