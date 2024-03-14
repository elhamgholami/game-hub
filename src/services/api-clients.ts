import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params:
        {
            key: '6b5bb707c8244cc6894b0c5ddbc662f0'
        }
    }
)