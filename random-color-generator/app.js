const bg1 = document.getElementById('bg1')
const colors = document.querySelectorAll('.colorss')

function getRandom() {
    colors.forEach((color) => {
        const rand = Math.round(Math.random() * 16777215)
        const randcode = '#' + rand.toString(16)

        color.innerHTML = `<h2 class="random">${randcode}</h2>`
        color.style.backgroundColor = randcode
    })
}

document.getElementById('btn').addEventListener('click', getRandom)

getRandom()