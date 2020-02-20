const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encondeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: { 'x-rapidapi-key': 'a38d2d83acmshd6d851d19ec0b6cp1090f6jsn6c9549ad67ab' }
    });


    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}