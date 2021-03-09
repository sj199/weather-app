const request = require('request');

const forecast = (latitude, longitude, fnForecast) => {

    const forecaseURL = `http://api.weatherstack.com/current?access_key=7898549063b3c39bf6c4f8b7c99f577e&query=${latitude},${longitude}&units=f`

    request({ url: forecaseURL, json: true }, (error, response) => {
        if (error) {
            fnForecast('Unable to connect to weather service!')
        } else if (response.body.error) {
            fnForecast('Unable to get location')
        } else {
            fnForecast(undefined, `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees. It is ${response.body.current.weather_descriptions[0]}.`)
        }
    })

}

module.exports = {
    forecast: forecast
}