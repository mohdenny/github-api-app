import axios from 'axios';

const clientId = 'd880e6ab5b1a0f500e9b';
const clientSecret = '49d79e01f78597e6bd70ade82eec0a2169e1d43c';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `client_id ${clientId}, client_secret ${clientSecret}`
    }
});

export default api;