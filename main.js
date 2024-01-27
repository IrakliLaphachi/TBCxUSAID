const header = document.querySelector('#header');

window.addEventListener('scroll', function() {  

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const card1 = document.querySelectorAll("[data-target='card1']");
const card2 = document.querySelectorAll("[data-target='card2']");
const card3 = document.querySelectorAll("[data-target='card3']");

function func1() {
    for (let i=0; i<3; i++)
        card1[i].classList.remove('hidden');
    for (let i=0; i<3; i++)
        card2[i].classList.add('hidden');
    for (let i=0; i<3; i++)
        card3[i].classList.add('hidden');
}

function func2() {
    for (let i=0; i<3; i++)
        card1[i].classList.add('hidden');
    for (let i=0; i<3; i++)
        card2[i].classList.remove('hidden');
    for (let i=0; i<3; i++)
        card3[i].classList.add('hidden');
}

function func3() {
    for (let i=0; i<3; i++)
        card1[i].classList.add('hidden');
    for (let i=0; i<3; i++)
        card2[i].classList.add('hidden');
    for (let i=0; i<3; i++)
        card3[i].classList.remove('hidden');
}

let slideCounter = 1;

setInterval(function() {
    if (slideCounter == 1){
        slideCounter = 2;
        func2();
    } else if (slideCounter == 2){
        slideCounter = 3;
        func3();
    } else if (slideCounter == 3){
        slideCounter = 1;
        func1();
    } 
}, 5000);

function left() {
    if (slideCounter == 1){
        slideCounter = 3;
        func3();
    } else if (slideCounter == 2){
        slideCounter = 1;
        func1();
    } else if (slideCounter == 3){
        slideCounter = 2;
        func2();
    } 
}

function right() {
    if (slideCounter == 1){
        slideCounter = 2;
        func2();
    } else if (slideCounter == 2){
        slideCounter = 3;
        func3();
    } else if (slideCounter == 3){
        slideCounter = 1;
        func1();
    } 
}