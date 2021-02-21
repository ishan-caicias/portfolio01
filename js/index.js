const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav__item');


navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(links => {
    links.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})