const mobile_nav =  document.getElementById("mobile_nav");
const menuIcon = document.querySelector(".menu_icon");
const closeIcon = document.querySelector(".close_icon");

menuIcon.addEventListener("click",()=>{
    mobile_nav.classList.toggle("active");
})

closeIcon.addEventListener("click",()=>{
    mobile_nav.classList.remove("active");
})