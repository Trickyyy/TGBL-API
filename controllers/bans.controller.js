const dbController = require('./db.controller');

module.exports = {
    isBanned: async(req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        const identifier = req.body.identifier;
        if(!identifier) {
            res.status(401).send({
                success: false,
                msg: "No user specified"
            });
        } else {
            const isBanned = await dbController.selectSingle(db, "SELECT * FROM bans WHERE identification = $1 AND isBanned = true;", [identifier]);
            if(isBanned) {
                res.status(200).send({
                    success: true,
                    identifier: identifier,
                    data: true
                });
            } else {
                res.status(200).send({
                    success: true,
                    identifier: identifier,
                    data: false
                });
            };
        };
    },
    getBans: async(req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        
        const bansList = await dbController.selectMultiple(db, "SELECT * FROM bans;");
        res.status(200).send({
            success: true,
            data: bansList
        });
    },
    addBan: async(req, res, next) => {
        const db = req.app.locals.db;
        /*
        const authToken = req.token;
        const decodedToken = req.decoded;
        */
        const identifier = req.body.identifier;
        if(!identifier) {
            res.status(401).send({
                success: false,
                msg: "No user specified"
            });
        } else {
            const alreadyBanned = await dbController.selectSingle(db, "SELECT * FROM bans WHERE identification = $1;", [identifier]);
            if(alreadyBanned) {
                res.status(400).send({
                    success: false,
                    msg: "User is already banned",
                    data: alreadyBanned
                });
            } else {
                await dbController.fire(db, "INSERT INTO bans (identification, isBanned, expires) VALUES ($1, true, null);", [identifier]);
                res.status(200).send({
                    success: true,
                    msg: "User has been banned",
                    user: identifier
                });
            };
        };
    },
}