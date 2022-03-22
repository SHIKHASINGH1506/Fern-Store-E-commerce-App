import axios from 'axios';

export const loginUser = (login) =>{
    const loginUrl = '/api/auth/login';
    return axios.post(loginUrl, login);
}