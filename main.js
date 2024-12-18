const menuToggle = document.querySelector('.togle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click',()=>{
    menuToggle.classLis.toggle('active');
    showcase.classList.toggle('active');
})