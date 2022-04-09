window.addEventListener('DOMContentLoaded', () => {
        // declare variables
    let toogleBtn = document.querySelector('#toogle-btn');
    let navMenu = document.querySelector('#nav-menu');
    let socialMenu = document.querySelector('#social-menu');
    let countries = document.querySelector('#country');
    let currentYear = document.querySelector('#date');

    // getting current year
    let newDate = new Date();
    currentYear.innerHTML = newDate.getFullYear();

    // display or hide nav menu
    toogleBtn.addEventListener('click', ()=> {
        navMenu.classList.toggle('hidden');
        socialMenu.classList.toggle('hidden');
        ['bi-x-lg', 'text-3xl'].map(item => toogleBtn.classList.toggle(item));
    });

    // add functions

    // Youtube lite video on-demand

    // Find all the YouTube video embedded on a page
    let videos = document.getElementsByClassName('youtube');
    videos = Array.from(videos);
    let youtube = "";

    videos.forEach(video =>{
        youtube = video;

        // Based on the YouTube ID, we can easily find the thumbnail image
        let img = document.createElement('img');
        img.setAttribute('src', `http://i.ytimg.com/vi/${youtube.id}/hqdefault.jpg`);
        img.setAttribute('class', 'thumb');

        // Overlay the Play icon to make it look like a video player
        let play = document.createElement('div');
        play.setAttribute('class', 'play');

        youtube.appendChild(img);
        youtube.appendChild(play);

        // Attach an onclick event to the YouTube Thumbnail
        youtube.onclick = function () {
            // Create an iFrame with autoplay set to true
            let iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${this.id}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`);

            // The height and width of the iFrame should be the same as parent
            iframe.style.width = this.style.width;
            iframe.style.height = this.style.height;

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            this.parentNode.replaceChild(iframe, this);
        };
    });

        // Getting all country names
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        let countryList = '';
        data.forEach(country => {
            let lowercase = country.name.toLowerCase();
            let countryName = country.name;
            countryList += `<option value="${lowercase}">${countryName}</option>`;
        });
        countries.innerHTML += countryList;
    });

    //  Slider customisation for youtube
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    




//  End of script.js
});

