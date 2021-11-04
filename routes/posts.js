const Post = require("../models/Post");

const router = require("express").Router();

//create post

router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})
//update post

router.put("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("post has been updated");
        }else{
            res.status(403).json("you cant edit this post!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})
//delete post
//like post
//get a post
//get timeline posts
module.exports = router;