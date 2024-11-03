const baseUrl = "https://api.weather.gov"
import axios from "axios"

const getAlerts = (location) => {
  return getPoints(location)
    .then(points => 
      axios
      .get(`${baseUrl}/alerts/active?area=${points.properties.relativeLocation.properties.state}`)
      .then(response => response.data)
    )
}

const getPoints = (location) => {
  return axios
    .get(`${baseUrl}/points/${location.latitude},${location.longitude}`)
    .then(response => response.data)
}

const getForecast = (points) => {
  return axios
    .get(points.properties.forecast)
    .then(response => response.data)
}

export default { getPoints, getAlerts, getForecast }