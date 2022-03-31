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

// Youtube lite video on-demand
function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);