const Years = "20 September 2023 08:00:00 PM"
const endDate = document.getElementById('end-date').innerHTML = Years

const inputs = document.getElementsByTagName('input')

const countDate = () => {
    const end = new Date(Years)
    const start = new Date()
    const diff = (end - start) / 1000
    //days
    const days = Math.floor(diff / 3600 / 24)
    inputs[0].value = days
    //hours
    const hours = Math.floor(diff / 3600) % 24
    inputs[1].value = hours
    //minutes
    const minutes = Math.floor(diff / 60) % 60
    inputs[2].value = minutes
    //seconds
    const seconds = Math.floor(diff) % 60
    inputs[3].value = seconds
}
countDate()

setInterval(countDate, 1000)
