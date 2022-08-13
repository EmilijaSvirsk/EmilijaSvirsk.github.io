//loader
$(window).on('load',function(){
    $('.loader-wrapper').fadeOut('slow');
    });



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
    background.style.backgroundImage = 'url("images/city/city_4_'+number+'.png")';        
}
setInterval(waitAndChangeBackground, 4000);

//move bar city up
let back1 = document.getElementById('background1');
let back2 = document.getElementById('background2');
let city1 = document.getElementById('city1');
let city2 = document.getElementById('city2');

//window image move
let win1 = document.getElementById('window1');
let win3 = document.getElementById('window3');
let win4 = document.getElementById('window4');
let win5 = document.getElementById('window5');

window.addEventListener('scroll', function()
{
    let value = window.scrollY;

    //moving bar city
    let navh = 55;
    if(value<navh) 
    {
        back2.style.top = value * -0.5 + 'px';
        back1.style.top = value * -0.5 + 'px';
        city1.style.top = value * -0.35 + 'px'; 
        city2.style.top = value * -0.2 + 'px'; 
    }
    else
    {
        back2.style.top = navh * -0.5 + 'px';
        back1.style.top = navh * -0.5 + 'px';
        city1.style.top = navh * -0.35 + 'px';
        city2.style.top = navh * -0.2 + 'px'; 
    }

    //window movement
    let winh = 250;
    if(value<winh)
    {
        win1.style.top = value * 0.05 + 'px';
        win3.style.top = value * -0.1 + 'px';
        win4.style.top = value * -0.2 + 'px';
        win5.style.top = value * -0.3 + 'px';
    }
    else
    {
        win1.style.top = winh * 0.05 + 'px';
        win3.style.top = winh * -0.1 + 'px';
        win4.style.top = winh * -0.2 + 'px';
        win5.style.top = winh * -0.3 + 'px';
    }
    
})