import express from 'express';
import {postCategory,getAllCategory} from '../controllers/categories.js'

const router = express.Router();

router.post('/',postCategory)
router.get('/',getAllCategory)

export default router;