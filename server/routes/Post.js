const router = require('express').Router();

const Post = require('../models/PostDB')
const verify = require('../models/verifyToken')
const logger = require('../log/logfile')

router.post('/create',verify,async (req,res)=>{
    const post = new Post({
        name: req.username,
        msg: req.body.msg
    })
    try{
        const result = await post.save()
        res.json(result)
        logger.book.log('info','Post message by ' + req.username);
    }catch(err){
        logger.book.log('error','error');
        res.json({err: err})
    }
})

router.get('/allPost', async (req,res)=>{
    try{
        const result = await Post.find()
        res.json(result)
    }catch(err){
        res.json({err : err})
    }
})


module.exports = router;