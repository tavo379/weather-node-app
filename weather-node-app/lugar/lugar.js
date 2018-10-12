const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyBPog84jQWS-ZLQBRjf_TbIDxzXl_bgc5k`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = res.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}