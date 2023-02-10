const verifyToken = (req,res,next) => {
    const bearerHeader = req.headers["authorization"];
    // check if accesstoken and refreshtoken 
    if(typeof(bearerHeader) !== "undefined" && typeof(req.cookies.jwt) !== "undefined"){
        req.token = bearerHeader;
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = { verifyToken };