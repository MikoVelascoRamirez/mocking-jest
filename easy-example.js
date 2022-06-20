const axios = require('axios');

const foreach = (numbers, callback) => {
    for(let i = 0; i < numbers.length; i++){
        callback(numbers[i]);
    }
}

const callingAPI = async url => {
    const request = await axios.get(url);
    return request.data;
}

module.exports = {
    foreach,
    callingAPI
};