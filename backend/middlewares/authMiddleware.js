const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const authMiddleware = async(req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try{
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET); 
                const user = await User.findByPk(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            console.error("Not authorized, token failed: Please login again");
        }
    } else {
        console.error("There is no token in the header");
    }
}

module.exports = authMiddleware ;