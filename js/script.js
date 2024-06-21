/* =============== TYPING ANIMATION =============== */
var typed = new Typed(".typing", {
    strings:["", "Web Desingner", "Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* =============== ASIDE =============== */
const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            console.log(this)
        })
      }