const jwt = require("jsonwebtoken");


exports.requireAuth = function (req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "secretkey");
    if (decodedToken) {
        console.log(decodedToken)
        res.status(200).json(
            {
                success: true,
                data: {
                    id: decodedToken.id
                }
            }
        );
        next();
    }
}