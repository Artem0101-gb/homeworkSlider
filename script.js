let images =[{
    url: 'images/herotwo.png',
    title: 'Rostov-on-Don Admiral'
}, {
    url: 'images/image2.png',
    title: 'Sochi Thieves'
}, {
    url: 'images/image3.png',
    title: 'Rostov-on-Don Patriotic'
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.slider__images');
    let sliderArrows = document.querySelector('.position-arrows');
    let sliderDots = document.querySelector('.slider__dots');
    let sliderName = document.querySelector('.list-container');

    initImages();
    initArrows();
    initDots();
    initName();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML = sliderImages.innerHTML + imageDiv;

        });
    };

    function initArrows() {
        sliderArrows.querySelectorAll('.position-arrows').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    };

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index);

            });
        });
    };

    function initName() {
        images.forEach((image, index) => {
            let firstName = `<li class="title link-projects link-projects-item n${0} ${index === 0? "active" : ""}" data-index="${0}">Rostov-on-Don, Admiral</li>`;
            let secondName = `<li class="title link-projects link-projects-item n${1} ${index === 0? "active" : ""}" data-index="${1}">Sochi Thieves</li>`;
            let thirdName = `<li class="title link-projects link-projects-item n${2} ${index === 0? "active" : ""}" data-index="${2}">Rostov-on-Don, Patriotic</li>`;

            if (index === 0) {
                sliderName.innerHTML += firstName;
            } else if (index === 1) {
                sliderName.innerHTML += secondName;
            } else if (index === 2) {
                sliderName.innerHTML += thirdName;
            };

        });
        
        sliderName.querySelectorAll('.link-projects-item').forEach(firstName => {
            firstName.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            });
        });
    };

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        sliderName.querySelector('.active').classList.remove('active');
        sliderName.querySelector('.n' + num).classList.add('active');
    };
};

document.addEventListener('DOMContentLoaded', initSlider);