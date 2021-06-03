import axios from 'axios';

const userUrl = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(userUrl);
export const createUser = (newUser) => axios.post(userUrl, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${userUrl}/${id}`, updatedUser);