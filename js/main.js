// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('mouseover', hoverOn);
menuBtn.addEventListener('mouseout', hoverOff);

function hoverOn() {
    document.getElementsByClassName('btn-line')[0].style.background = "#fff";
    document.getElementsByClassName('btn-line')[1].style.background = "#fff";
    document.getElementsByClassName('btn-line')[2].style.background = "#fff";
}

function hoverOff() {
    document.getElementsByClassName('btn-line')[0].style.background = "#ccc";
    document.getElementsByClassName('btn-line')[1].style.background = "#ccc";
    document.getElementsByClassName('btn-line')[2].style.background = "#ccc";
}


function toggleMenu() {
    if(!showMenu) {
        menu.classList.add('show'); 
        menuLeft.classList.add('show');
        menuRight.classList.add('show'); 
        document.body.style.overflow = "hidden";
        
        //SET MENU STATE
        showMenu = true; 
        
        document.getElementsByClassName('btn-line')[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        document.getElementsByClassName('btn-line')[1].style.opacity = "0";
        document.getElementsByClassName('btn-line')[2].style.transform = "rotate(-45deg) translate(6px, -7px)";        
    } else {
        menu.classList.remove('show'); 
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show');
        document.body.style.overflow = "initial";
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.opacity = "1";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";          
    }
}