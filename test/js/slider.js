const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
const imgArr = ['./img/slider/slide1.jpg', './img/slider/slide2.jpg', './img/slider/slide3.jpg', './img/slider/slide4.jpg', './img/slider/slide5.jpg'];

let currentIndex = 0;

setTimeout(function run() {
    currentIndex++;

    if (currentIndex > 4) {
        currentIndex = 0;
    }

    slide(currentIndex);

    setTimeout(run, 4000);
}, 4000);

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }

    slide(currentIndex);
}

function slide(index) {
    img.style.display = "none";

    setTimeout(() => {
        img.style.display = "block";
    }, 0);

    img.src = imgArr[index];

    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }

    dots[index].classList.add('active');
}