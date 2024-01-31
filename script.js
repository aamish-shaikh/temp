window.addEventListener("scroll", () => {
    var header = document.querySelector("nav")
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", () => {
    var imgUp = document.querySelector(".img2")
    imgUp.classList.toggle("shift-up" , window.scrollY > 350)
})
// window.addEventListener("click", act =  ()=> {
//     var active = document.querySelector(".section-2")
//     console.log("code is running")
//     active.classList("nav-active")
// })
    