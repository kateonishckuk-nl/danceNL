const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
const imgArr = ['./img/slider/281544710_1038435253756960_8530582411724239648_n.jpg', './img/slider/281150382_400125388499160_4125650547845416426_n.jpg', './img/slider/281132265_702480561040277_7332772478071203925_n.jpg', './img/slider/280218616_329158456025513_7444647872372913923_n.jpg', './img/slider/281132265_702480561040277_7332772478071203925_n.jpg', './img/slider/281006779_5132324116847310_3943254054355824060_n.jpg'];

setTimeout(function run() {
    currentIndex++;

    if (currentIndex > 5) {
        currentIndex = 0;
    }

    slide(currentIndex);

    setTimeout(run, 4000);
}, 4000);

let currentIndex = 0;

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
    } else {
        console.log(currentIndex);
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