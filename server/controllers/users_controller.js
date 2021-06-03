import mongoose from 'mongoose';

import UserMessage from '../models/userMessage.js';


export const getUsers = async (request, response) => {
    try {
        const userMessages = await UserMessage.find();
        response.status(200).json(userMessages);
    } 
    
    catch (error) {
        response.status(404).json({message : error.message});
    }
}



export const createUser = async (request, response) => {
    const user = request.body;
    const newUser = new UserMessage(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } 
    
    catch (error) {
        response.status(409).json({message : error.message});
    }
}


export const updatedUser = async (request, response) => {
    const { id: _id } = request.params;
    const user = request.body;

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return response.status(404).send('No vaild ID');
    }

    const updatedUser = await UserMessage.findByIdAndUpdate(_id, user, {new: true});

    response.send(updatedUser);
}