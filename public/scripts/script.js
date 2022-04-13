window.addEventListener('DOMContentLoaded', () => {
        // declare variables
    let toogleBtn = document.querySelector('#toogle-btn');
    let navMenu = document.querySelector('#nav-menu');
    let socialMenu = document.querySelector('#social-menu');
    let countries = document.querySelector('#country');
    let email = document.querySelector('#email');
    let currentYear = document.querySelector('#date');
    let navLinks = document.querySelectorAll('.nav-link');
    let newsletter = document.querySelector('#newsletter');
    let newsletterBtn = document.querySelector('#newsletterBtn');
    let closeModalBtn = document.querySelector('#closeModalBtn');
    let subscribe = document.querySelector('#subscribe');
    let subscribeBtn = document.querySelector('#subscribeBtn');

    // getting current year
    let newDate = new Date();
    currentYear.innerHTML = newDate.getFullYear();

    // display or hide nav menu
    toogleBtn.addEventListener('click', ()=> {
        navMenu.classList.toggle('hidden');
        socialMenu.classList.toggle('hidden');
        ['bi-x-lg', 'text-3xl'].map(item => toogleBtn.classList.toggle(item));
    });

    // show active class on active nav link

    // destructuring nav links
    [home, music, vid, merch] = navLinks;

    // actual function to show active element
    navMenu.addEventListener('click', event =>{
        let targetedEvent = event.target;
        if(targetedEvent == home){
            showOnlyOneActiveElement(home, music, vid, merch);
        }else if(targetedEvent == music){
            showOnlyOneActiveElement(music, home, vid, merch);
        }else if(targetedEvent == vid){
            showOnlyOneActiveElement(vid, music, home, merch);
        }else{
            showOnlyOneActiveElement(merch, music, vid, home);
        }
    });

    // show only one active element at a time
    function showOnlyOneActiveElement(link1, link2, link3, link4){
        link1.classList.add('active');
        link2.classList.remove('active');
        link3.classList.remove('active');
        link4.classList.remove('active');
    }

    // show active class on current section on scroll
    window.addEventListener('scroll', ()=> {
        let activeHeight = window.scrollY;
        if(activeHeight <= 660){
            showOnlyOneActiveElement(home, music, vid, merch);
        }else if(activeHeight > 667 && activeHeight <= 1080){
            showOnlyOneActiveElement(music, home, vid, merch);
        }else if(activeHeight > 1080 && activeHeight <= 2000){
            showOnlyOneActiveElement(vid, music, home, merch);
        }else{
            showOnlyOneActiveElement(merch, music, vid, home);
        }
    });

    // Writing script to display or hide newsletter page

    // function to toggle subscribe modal
    const toggleModal = ()=>{
        newsletter.classList.toggle('hidden');
        newsletter.classList.toggle('flex');
    }
    
    // function to select any button which is clicked
    const clickModalToggle = (btnToClick)=>{
        btnToClick.addEventListener('click', ()=>{
            toggleModal();
        })
    }

    // calling click to toggle modal function
    clickModalToggle(newsletterBtn);
    clickModalToggle(subscribeBtn);

     // function close the modal on clicking close button
     closeModalBtn.addEventListener('click', ()=>{
        toggleModal();
    })

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
    

    // Newsletter sign-up
    subscribe.addEventListener('submit', (event)=>{
        event.preventDefault();

        // variables declaration
        let success = document.getElementById('success-message');
        let errorMessage = document.getElementById('fail-message');
        let subscriberEmail = email.value;
        let subscriberCountry = countries.options[countries.selectedIndex].text;

        // Check and send mail
        if(subscriberEmail.trim() != '' && subscriberCountry !== 'Select your country'){
            Email.send({
                SecureToken: '0864ce99-04c4-41d4-bef3-b1d9695f183d',
                To : 'nyamadiatsu88@gmail.com',
                From : "qlik.studios@gmail.com",
                Subject : "New subscriber for Official D Rwoy!",
                Body : 
                `<div>
                    <p style="font-size: 22px;">
                        Hello 
                        <span style="color: purple; font-weight: bold;">D Rwoy,</span>
                    </p>
                    <p style="font-size: 20px; margin-top: 10px;">A new user with just joined your mailing list.</p>
                    <p style="font-size: 20px; margin-top: 10px;">See below for the details of your new subscriber</p>
                    <p style="font-size: 18px; margin-top: 10px;">
                        Email: ${subscriberEmail}
                        <br>
                        Country: ${subscriberCountry}
                    </p>
                    <p style="font-size: 20px; margin-top: 10px;">Best Regards, <br> Official D Rwoy Newsletter</p>
                </div>`
            }).then( ()=> {
                //  Auto Reply
                Email.send({
                    SecureToken: '0864ce99-04c4-41d4-bef3-b1d9695f183d',
                    To : `${subscriberEmail}`,
                    From : "qlik.studios@gmail.com",
                    Subject : "Thank you for subscribing",
                    Body : `<p><span style="font-size: 14pt;">Hello, ${subscriberEmail}</span></p>
                    <p><span style="font-size: 14pt;">I would like to use this opportunity to thank you for subscribing to our weekly newsletter.</span></p>
                    <p><span style="font-size: 14pt;">Please rememeber to save our email as important in order to receive updates from as as soon as we send them.</span></p>
                    <p>&nbsp;</p>
                    <p><span style="font-size: 14pt;">Best wishes,</span></p>
                    <p><span style="font-size: 14pt;">Official D Rwoy</span></p>`
                });

                successOrFailed(success);
                setTimeout(() => {
                    // return to homepage
                    location.href = 'index.html';
               }, 2000);
            }) 
            //if there's any error
            .catch(()=>{
                successOrFailed(errorMessage);
                setTimeout(() => {
                    // return to homepage
                    location.href = 'index.html';
               }, 2000);
            })
        }else{
            successOrFailed(errorMessage);
            setTimeout(() => {
                // return to homepage
                location.href = 'index.html';
           }, 2000);
        }
    });

    // get success or failed message to display
    const successOrFailed = (item)=>{
        item.classList.remove('hidden');
    }


//  End of script.js
});

