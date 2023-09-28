import axios from "axios";



const request = axios.create({
    baseURL: `https://parseapi.back4app.com`,
    headers:{
        'X-Parse-Application-Id': `l9VOvJyeab1mcSqfxMWz4NuHMWDNUQ2Mso1HTwXm`,
        'X-Parse-REST-API-Key': `Oas3rBzG6bjAzMtqxXSkgUpjXQ2TeOVhpdRFpI5i`,
        'Content-Type': 'application/json'
    },
    transformRequest: [function (data, headers) {
        const parsedData = JSON.stringify(data)
        
        return parsedData;
      }]
})


export default request