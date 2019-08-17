const checkSuperUser = (req, res, next) => {
    const authToken = req.token;
    console.log(authToken);
    console.log(process.env.SUPER_TOKEN);
    if(authToken !== process.env.SUPER_TOKEN) {
        res.status(403).send({
            success: false,
            msg: "Invalid super token"
        });
    } else {
        next();
    };
    
};

module.exports = checkSuperUser;