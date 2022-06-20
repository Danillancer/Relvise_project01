const hamb = document.querySelector("#hamb");
const body = document.body;
const menu= document.querySelector("#menu")

hamb.addEventListener("click", function (e){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});
 

 
