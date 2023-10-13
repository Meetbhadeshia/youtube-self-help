import axios from "axios"
// require('dotenv').config()
console.log(process.env)
console.log(process.env)
const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
        maxResults: '50',
        regionCode: 'IN',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// url is a prop that we are gonna pass for each diff url like channels, videos
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}
