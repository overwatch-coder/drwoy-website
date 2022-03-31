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
        toogleBtn.classList.remove('bi-list', 'text-4xl');
        toogleBtn.classList.add('bi-x-lg','text-3xl');
    }else{
        navMenu.classList.add('hidden');
        socialMenu.classList.add('hidden');
        toogleBtn.classList.remove('bi-x-lg', 'text-3xl');
        toogleBtn.classList.add('bi-list', 'text-4xl');

    }
}