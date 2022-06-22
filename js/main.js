const hamb = document.querySelector("#hamb");
const body = document.body;
const menu= document.querySelector("#menu");
const menuItem= dociment.querySelector("#menu__item")  

hamb.addEventListener("click", function (e){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});
 
menuItem.forEach(i=>{ 
i.addEventListener("click", function (e){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});
})

 
