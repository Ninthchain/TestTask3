const axios = require('axios');

(async () => {
    const requests = [
        await axios.get('https://jsonplaceholder.typicode.com/posts/1'),
        await axios.get('https://jsonplaceholder.typicode.com/posts/2'),
        await axios.get('https://jsonplaceholder.typicode.com/posts/3'),
        await axios.get('https://jsonplaceholder.typicode.com/posts/4'),
        await axios.get('https://jsonplaceholder.typicode.com/posts/5')
    ];

    const results = await Promise.all(requests);
    console.log(results);
    console.log('All requests completed!')
})()