const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){
    const auth_header = req.headers['authorization']
    const token = auth_header && auth_header.split(' ')[1]
    if(!token) 
        return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, info) => {
        if(!token) return res.sendStatus(403)
        req.username = info.username
        next()
    })
}

module.exports = verifyToken
