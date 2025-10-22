const likesCount = document.getElementById("likes_count");
const heartIcons =  document.querySelectorAll("#heart");

heartIcons.forEach(h=>{
    h.addEventListener("click",()=>{
        h.classList.toggle("liked");
    })
})