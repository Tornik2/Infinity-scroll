const newArray = new Array(20).fill(0)
let isReady = true
const loader = document.querySelector('.loader-img')
 console.log(loader)
let imagesArray = newArray.map(() => {
    return `https://picsum.photos/id/${(Math.floor(Math.random() * 700))}/300/400`
})


const container = document.getElementById('container')
function getImagesHTML() {
    if (isReady) {
        loader.hidden = true
        imagesArray.map(image => {
            container.innerHTML += `
            <img src="${image}">
            `
        })
    }
}
getImagesHTML()

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight -1000) {
        isReady = true
        getImagesHTML()
    } else {
        isReady = false
    }
})
