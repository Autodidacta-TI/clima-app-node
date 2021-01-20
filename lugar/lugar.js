const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'ab5ce7535emsh95c5bd7603ecf85p1c2e26jsn6ae58933cc8e' }
    });

    const resp = await instance.get();

    if (resp.data === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat.toString();
    const lng = data.coord.lon.toString();

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}