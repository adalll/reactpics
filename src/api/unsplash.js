import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 04e9555cd37a518269f5a38389615ae7c3d54b7aecc53596573e583caacb1cd7'
    }
});