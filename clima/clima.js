const axios = require('axios');

const getClima = async(lat, lng) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ce86813855154dc77eeee3d3807e87f0`)

    return res.data.main.temp;
}

module.exports = {
    getClima
}