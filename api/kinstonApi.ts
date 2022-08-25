import axios from 'axios';



const kinstonApi = axios.create({
    baseURL: '/api'
});


export default kinstonApi;
