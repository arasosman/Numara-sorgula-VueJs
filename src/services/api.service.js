import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
