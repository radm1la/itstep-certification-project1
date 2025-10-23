const heartIcons =  document.querySelectorAll("#heart");

heartIcons.forEach(h=>{
    h.addEventListener("click",()=>{
        h.classList.toggle("liked");
    })
})