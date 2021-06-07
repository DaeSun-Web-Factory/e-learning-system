import mongoose from 'mongoose';

import CourseMessage from '../models/courseMessage.js';


export const getCourses = async (request, response) => {
    try {
        const userMessages = await CourseMessage.find();
        response.status(200).json(userMessages);
    } 
    
    catch (error) {
        response.status(404).json({message : error.message});
    }
}



export const createCourse = async (request, response) => {
    const user = request.body;
    const newUser = new CourseMessage(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } 
    
    catch (error) {
        response.status(409).json({message : error.message});
    }
}


export const updatedCourse = async (request, response) => {
    const { id: _id } = request.params;
    const course = request.body;

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return response.status(404).send('No vaild ID');
    }

    const updatedCourse = await CourseMessage.findByIdAndUpdate(_id, course, {new: true});

    response.send(updatedCourse);
}

export const deleteCourse = async (request, response) => {
    const { id: _id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return response.status(404).send('No vaild ID');
    }

    await CourseMessage.findByIdAndRemove(_id);

    response.send({message: 'Course deleted successfully'});
}