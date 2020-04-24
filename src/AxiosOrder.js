import axios from 'axios'



const instance = axios.create(
    {
        baseURL: 'https://builder-burger-1d3a5.firebaseio.com/'
    }

)

export default instance