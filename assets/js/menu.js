const toggleBtn = document.querySelector('.navbar_toggle_btn');
const menu = document.querySelector('.navbar_menu');
const about = document.querySelector('.navbar_about');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    about.classList.toggle('active');
});


