console.log("Client side Javascript file loaded")

// const forecastFn = async (address) => {
//     await fetch(`http://localhost:3000/weather?address=${address}`).then((res) => {
//         res.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.forecast)
//                 console.log(data.location)
//             }
//         })
//     })
// }

const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchEl.value

    messageOne.textContent = 'Loading ....'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

    // forecastFn(location)
})