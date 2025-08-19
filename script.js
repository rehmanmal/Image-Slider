const slides = document.querySelector(".slides")
const images = document.querySelectorAll(".slides img")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
let index = 0
const total = images.length

function showSlide(i) {
    if (i < 0) {
        index = total - 1
    } else if (i >= total) {
        index = 0
    } else {
        index = i
    }
    slides.style.transform = `translateX(${-index * 100}%)`
}


nextBtn.addEventListener("click", () => {
    showSlide(index + 1)
})

prevBtn.addEventListener("click", () => {
    showSlide(index - 1)
})

setInterval(() => {
    showSlide(index + 1)
}, 3000);