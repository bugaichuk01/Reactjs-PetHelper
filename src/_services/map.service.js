import axios from "axios";

const geocode = async (geocode) => {
    return await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_YANDEX_GEOCODER}&format=json&geocode=${geocode}`)
}

const searchLocation = async (value) => {
    return await axios.get(`https://search-maps.yandex.ru/v1/?apikey=${process.env.REACT_APP_YANDEX_SEARCH}&text=${value}&lang=ru_RU`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    geocode,
    searchLocation
}

