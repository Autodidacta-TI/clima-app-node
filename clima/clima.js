const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=132f0a916f0f5148464375bce3709bc4&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}