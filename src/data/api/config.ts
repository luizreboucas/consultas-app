import axios from "axios";
import { load } from "ts-dotenv";

const env = load({
    BASE_URL: String,
    APPLICATION_ID: String,
    API_KEY: String
})

const request = axios.create({
    baseURL: `${env.BASE_URL}`,
    headers:{
        'X-Parse-Application-Id': `${env.APPLICATION_ID}`,
        'X-Parse-REST-API-Key': `${env.API_KEY}`,
        'Content-Type': 'application/json'
    },
    transformRequest: [function (data, headers) {
        const parsedData = JSON.stringify(data)
        
        return parsedData;
      }]
})


export default request