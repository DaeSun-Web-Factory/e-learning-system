import express from 'express';

import {getUsers, createUser, updatedUser} from '../controllers/users_controller.js'

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updatedUser);

export default router;