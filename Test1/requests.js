const { AxiosHeaders } = require('axios')

const axios = require('axios').default


// Async GET|POST req 

var asyncReq = (async () => {
    let getResponse = await axios.get("https://httpbin.org/get")
    console.log(getResponse.data)

    let postResponse = await axios.post("https://httpbin.org/post", {}, {
        headers: {
            Accept: "application/json"
        }
    })
    console.log(postResponse.data)
})


asyncReq()

// Sync req
console.log("Sync get")
const data = axios.get("https://httpbin.org/get", {})

console.log(data)