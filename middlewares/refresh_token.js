const jwt = require("jsonwebtoken");

const refreshToken = async (req,res,next) => {
    // Token comes to refresh
    if(typeof(req.cookies.jwt) !== "undefined"){
        let isCorrectToken = true;

        // Check if token is correct
        jwt.verify(req.cookies.jwt, process.env.JWT_REFRESH_SECRET,(err, authData) => {
            if(err){
                isCorrectToken = false;
            }
        });

        if(isCorrectToken === false) return res.sendStatus(401);

        // Extract form jwt
        const payload = jwt.decode(req.cookies.jwt, process.env.JWT_REFRESH_SECRET);
        const profile = payload.profile;
        
        const accesstoken = jwt.sign({ profile }, process.env.JWT_SECRET,{ expiresIn: "1d" });
        const refreshtoken = jwt.sign({ profile }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
        req.token = accesstoken;

        // Set Cookie 
        res.clearCookie('jwt');
        res.cookie('jwt', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000
        });
        console.log("Token refreshed.")
        next();
    }
    else{
        res.json({ "msg": "RefreshToken not found"});
    }

}

module.exports = { refreshToken };