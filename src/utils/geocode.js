const request = require('request')

const geocode = (address, fnMapBox) => {
    const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY2Vjb3hvZiIsImEiOiJja2x0b21la24wYXE0MndxeDM3amYzMG5kIn0.O0PfS2W14hqKl8laYbbS3Q`
    request({ url: mapbox_url, json: true }, (error, response) => {
        if (error) {
            fnMapBox('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            fnMapBox('Unable to find location. Try another search')
        } else {
            fnMapBox(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = {
    geocode: geocode
}