import express from 'express';
import {createPost,updatePost,deletePost,getPost,getAllPost} from '../controllers/posts.js'

const router = express.Router();
router.post('/',createPost)
router.put('/:id',updatePost) 
router.delete('/:id',deletePost)
router.get('/:id',getPost)
router.get('/',getAllPost)
/* router.put('/:id',updateUser);
router.delete('/:id',deleteUser)
router.get('/:id',getUser)
updatePost,deletePost,getPost
 */
export default router 