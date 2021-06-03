import express from 'express';

import {getUsers, createUser, updatedUser} from '../controllers/userController.js'

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updatedUser);

export default router;