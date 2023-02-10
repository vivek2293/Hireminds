const jwt = require("jsonwebtoken");

const refreshToken = async (req,res,next) => {
    console.log("Token came to refresh")
    if(typeof(req.cookies.jwt) !== "undefined"){
        let isCorrectToken = true;
        jwt.verify(req.cookies.jwt, process.env.JWT_REFRESH_SECRET,(err, authData) => {
            if(err){
                isCorrectToken = false;
            }
        });

        if(isCorrectToken === false) return res.sendStatus(401);

        const payload = jwt.decode(req.cookies.jwt, process.env.JWT_REFRESH_SECRET);
        const club = payload.club;
        
        const accesstoken = jwt.sign({ club }, process.env.JWT_SECRET,{ expiresIn: "2m" });
        const refreshtoken = jwt.sign({ club }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7 day" });
        req.token = accesstoken;
        res.clearCookie('jwt');
        res.cookie('jwt', refreshtoken, {
            httpOnly: true,
            maxAge: 10*24*60*60*1000
        });
        console.log("Token refreshed.")
        next();
    }
    else{
        res.json({ "msg": "RefreshToken not found"});
    }

}

module.exports = { refreshToken };