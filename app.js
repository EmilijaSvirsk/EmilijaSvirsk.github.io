const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function waitAndChangeBackground() {
    let background = document.getElementById('background');
    let number = Math.floor(Math.random() * 3).toString(); //from 0 to 2
    background.style.backgroundImage = 'url("images/city/city_4_'+number+'.png")'; // + number;        
}
setInterval(waitAndChangeBackground, 4000);