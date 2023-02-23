let squadMembers = null;


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

const searchBar = document.getElementById('site-search')
const labelSearch = document.querySelector('.label-search')

labelSearch.addEventListener('click', visibleSearch)

function visibleSearch(){
    searchBar.classList.toggle('visible-search');
    labelSearch.hidden = true;

}



searchBar.addEventListener('keyup', search)
squadMembers = document.querySelectorAll('.students > a')

function search() {
    
    const searchValue = this.value.toLowerCase()
    
    if(this.value === '') {
      squadMembers.forEach(member => {
        member.hidden = false;
      })
    } else {
      squadMembers.forEach(member => {
        member.hidden = !member.textContent.toLowerCase().includes(searchValue);
      })
    }
}


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)) {
            console.log(`${activePage}`);
            link.classList.add('active');
    }
}) 
