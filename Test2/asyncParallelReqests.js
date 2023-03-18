const axios = require('axios');

(async () => {
    const requests = [
        await axios.get('https://httpbin.org/get'),
        await axios.get('https://httpbin.org/get'),
        await axios.get('https://httpbin.org/get'),
        await axios.get('https://httpbin.org/get'),
        await axios.get('https://httpbin.org/get')
    ];

    const results = await Promise.all(requests);
    console.log(results);
    console.log('All requests completed!')})()