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
            const isBanned = dbController.selectSingle(db, "SELECT * FROM bans WHERE identification = $1 AND isBanned = true;", user);
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
    addBan: (req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        const user = req.body.user;
        const banIssuer = req.body.banIssuer;
        if(!user) {
            res.status(401).send({
                success: false,
                msg: "No user specified"
            });
        } else if(!banIssuer) {
            res.status(401).send({
                success: false,
                msg: "No banIssuer specified"
            });
        } else {
            const alreadyBanned = dbController.selectSingle(db, "SELECT isBanned, expires FROM bans WHERE identification = $1;", user);
            if(alreadyBanned) {
                res.status(400).send({
                    success: false,
                    msg: "User is already banned",
                    data: alreadyBanned
                });
            } else {
                dbController.fire(db, "INSERT INTO bans (identification, banIssuer, isBanned, expires) VALUES ($1, $2, true, null);", [user, banIssuer]);
                res.status(200).send({
                    success: true,
                    msg: "User has been banned",
                    user: user
                });
            };
        };
    },
}