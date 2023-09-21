import axios from "axios";

const request = axios.create({
    baseURL: `${process.env.BaseUrl}`,
    headers:{
        'X-Parse-Application-Id': `${process.env.ApplicationId}`,
        'X-Parse-REST-API-Key': `${process.env.ApiKey}`,
        'Content-Type': 'application/json'
    }
})


export default request