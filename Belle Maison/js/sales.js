window.onload = function() {
    showphoto(index);
}
var index = 1;

function plusSlides(n) {
    showphoto(index += n);
}

function showphoto(n) {
    var slides = document.getElementsByClassName('framephoto');

    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}