const express = require('express');
const tagsRouter = express.Router();
const {getAllTags, getPostsByTagName}=require('../db')

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  
  const {tagName}= req.params
 console.log(req.params)
 
  try {
    const getPostsByTag= await getPostsByTagName(tagName);
    const singlePosts= getPostsByTag.filter(tag=>{
      if (tag.active){
        return true;
      }
      else if (req.user && post.author.id === req.user.id){
        return true;
      }
      else{ 
        return false;
      }
    })
    res.send({singlePosts})
    // use our method to get posts by tag name from the db
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    })
  }
});
  
  
  tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();
  
    res.send({
      tags
      
    });
  });

  
  module.exports = tagsRouter;