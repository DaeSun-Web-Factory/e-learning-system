import express from 'express';

import { getCourses, createCourse, updatedCourse, deleteCourse } from '../controllers/courseController.js'

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
router.patch('/:id', updatedCourse);
router.delete('/:id', deleteCourse);

export default router;