const router = require('express').Router();
const bodyParser = require('body-parser')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const logger = require('../log/logfile')
dotenv.config();

router.post('/', bodyParser.json(), async (req, res) => {
    let token = req.body.token
    let result = await axios.get('https://graph.facebook.com/me', {
        params: {
            fields: 'id,name,email,picture.width(200).height(200)',
            access_token: token
        }
    })
    if(!result.data.id){
        logger.book.log('error',result.data.name + 'error 403');
        res.sendStatus(403)
        return
    }
    let data = { username: result.data.name }
    let access_token = jwt.sign(data, 
        process.env.TOKEN_SECRET, 
        {expiresIn: '1800s'}
    )
    try{
        logger.book.log('info',result.data.name + 'login success');
        res.send({access_token,result:result.data})
    }catch(err){
        res.send(err)
    }
})


module.exports = router;