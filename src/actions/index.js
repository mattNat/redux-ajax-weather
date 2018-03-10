import axios from 'axios';

const API_KEY = '593b1d06d15a521411365989117e8abf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// purpose: keep action type consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// city is string
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // this will return a request promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}