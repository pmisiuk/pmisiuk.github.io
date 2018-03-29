const navToggle = document.querySelector(".mobile-nav-toggle")
navToggle.addEventListener('click', ()=>{
    const mobileMenu = document.querySelector(".main-nav")
    mobileMenu.classList.toggle("is-open")
})