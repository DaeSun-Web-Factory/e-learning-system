import axios from 'axios';

const userUrl = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(userUrl);
export const createUser = (newUser) => axios.post(userUrl, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${userUrl}/${id}`, updatedUser);


const courseUrl = 'http://localhost:5000/courses';

export const fetchCourses = () => axios.get(courseUrl);
export const createCourse = (newCourse) => axios.post(courseUrl, newCourse);
export const updateCourse = (id, updatedCourse) => axios.patch(`${courseUrl}/${id}`, updatedCourse);
export const deleteCourse = (id) => axios.delete(`${courseUrl}/${id}`);