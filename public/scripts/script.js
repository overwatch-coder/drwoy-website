// declare variables
let toogleBtn = document.querySelector('#toogle-btn');
let navMenu = document.querySelector('#nav-menu');
let socialMenu = document.querySelector('#social-menu');

// add event listeners
toogleBtn.addEventListener('click', showNav); 

// add functions
function showNav() {
    if(navMenu.classList.contains('hidden')){
        navMenu.classList.remove('hidden');
        socialMenu.classList.remove('hidden');
    }else{
        navMenu.classList.add('hidden');
        socialMenu.classList.add('hidden');

    }
}