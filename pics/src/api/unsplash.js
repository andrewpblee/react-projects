import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bf13ec5984481b1ebb56b855db2d79caf1c2ee28be4ea96d8d7b7b789a88be69'
    }
})