let menuIcon = document.querySelector('.playlists__menu');
let menuIcon1 = document.querySelector('.playlists__menu1');

let menuAnim = document.querySelector('.hidden');

menuIcon.addEventListener('click', animHandler)
menuAnim.addEventListener('animationend', animHandler)

function animHandler() {
    menuAnim.classList.toggle('hidden')
}

menuIcon1.addEventListener('click', animHandler)
menuAnim.addEventListener('animationend', animHandler)

function animHandler() {
    menuAnim.classList.toggle('hidden')
}


// do   ument.querySelector('.playlists__heading').textContent = new Date().getHours() >= 12 ? 'Goedemiddag!' : 'Goedemorgen!';






// r20222

// zoekbalk probeersel


const searchBar = document.getElementById('site-search')
const labelSearch = document.querySelector('.label-search')
console.log(labelSearch)
labelSearch.addEventListener('click', visibleSearch)

function visibleSearch(){
    searchBar.classList.toggle('visible-search');
}