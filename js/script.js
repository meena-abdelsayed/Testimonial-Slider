// Defining Variables
// Get Navigation dots
let btn = document.getElementsByClassName("btn");
// Get each sliding testimonial
let slide = document.getElementById("slide");
// On dot click navigate between each slider
btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)"
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}
btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)"
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active")
}

