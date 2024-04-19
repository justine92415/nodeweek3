import express from 'express';
import posts from '../controllers/posts';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('home page');
});

router.get('/posts', posts.getPosts);

router.post('/posts', posts.createPost);

router.delete('/posts', posts.deleteAllPosts);
router.delete('/posts/:id', posts.deletePost);

router.patch('/posts/:id', posts.updatePost);


export default router;
