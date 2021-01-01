import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID r2c4pwrk6ZBU2BWnsw_7HIxnDWVjQ5WlkHf96qbxCe0'}
})