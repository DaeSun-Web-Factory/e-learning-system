import express from 'express';

import { getCourses, createCourse, updatedCourse } from '../controllers/courseController.js'

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
router.patch('/:id', updatedCourse);

export default router;