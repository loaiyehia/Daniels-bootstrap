

// var box='';

// for(var i=0; i<30;i++){
// if(i%2 === 0){
//   box+=`<h2 class="dark">Route<h2>`

// }else{
//   box+=`<h2 class="light">Route<h2>`
// }

// }
// document.getElementById("demo").innerHTML=box


let upIcon = document.querySelector("#up");

window.addEventListener("scroll", function () {
  // console.log("hii")
  window.scrollY >= 500
    ? upIcon.classList.add("show")
    : upIcon.classList.remove("show");
});
upIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
