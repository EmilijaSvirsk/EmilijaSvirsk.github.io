//mobile transformation
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//bar city light flickering
function waitAndChangeBackground() {
    let background = document.getElementById('background2');
    let number = Math.floor(Math.random() * 3).toString(); //from 0 to 2
    background.style.backgroundImage = 'url("images/city/city_4_'+number+'.png")'; // + number;        
}
setInterval(waitAndChangeBackground, 4000);

//move bar city up

let back1 = document.getElementById('background1');
let back2 = document.getElementById('background2');
let city = document.getElementById('city');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if(value<45)
    {
        back2.style.top = value * -0.5 + 'px';
        back1.style.top = value * -0.5 + 'px';
        city.style.top = value * -0.2 + 'px';
    }
    })