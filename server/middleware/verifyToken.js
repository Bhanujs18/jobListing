const jwt=require('jsonwebtoken');

const verifyToken = async(req, res, next) => {
try {
    const header = req.headers["authorization"];
    if(!header){
        res.status(401).json({ message : "Unauthrized Access"});
    }
    const verify = jwt.verify(header ,process.env.SECRET_CODE);
    req.userId= verify.userId;
    next();

} catch (error) {
    console.log(error)
    res.status(401).json({message : "Invaliod Token!!"})
}
}





module.exports = {verifyToken};