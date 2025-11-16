const bars = document.getElementById("bars");
let show = false;
const ul = document.getElementById("ul");
bars.addEventListener("click",()=>{
    show = !show;
    if(show){
        ul.style.display = "flex";
    }
    else{
        ul.style.display = "none";
    }
})

const img=[
"url('../Home1.jpg')",
"url('../Home2.jpg')",
"url('../Home3.jpg')",
];
const hero = document.getElementById("hero");
let index = 0;
setInterval(()=>{
    hero.style.backgroundImage = img[index];
    index = (index +1)% img.length;
},2000);
