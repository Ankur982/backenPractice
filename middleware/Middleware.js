const User = require("../models/User");;
const JWT_SEC = "Ankur"



const Authmiddleware = async (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, JWT_SEC, (err, User) => {
            if (err) res.status(403).json("Token is not valid!");
            req.User = User;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
}



module.export = Authmiddleware;