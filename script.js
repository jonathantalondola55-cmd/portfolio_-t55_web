// window.addEventListener("load",()=>{

// setTimeout(()=>{

// document.getElementById("loader").style.opacity="0";

// document.getElementById("loader").style.visibility="hidden";

// },2500);

// });
// const btn=document.getElementById("scrollTop");

// window.onscroll=function(){

// if(document.documentElement.scrollTop>400){

// btn.style.display="block";

// }else{

// btn.style.display="none";

// }

// }

// btn.onclick=function(){

// window.scrollTo({

// top:0,

// behavior:"smooth"

// });

// }
// ======================
// LOADER
// ======================


window.addEventListener("load",()=>{


const loader=document.getElementById("loader");


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";


},1000);



},2500);



});




// ======================
// SCROLL TOP
// ======================


const scrollBtn=document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


if(window.scrollY>500){

scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}


});



scrollBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"


});


};





// ==========================
// MENU MOBILE
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



// ======================
// COMPTEURS
// ======================


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target=parseInt(counter.innerText);

let count=0;


let interval=setInterval(()=>{


count+=1;


counter.innerText=count;



if(count>=target){


clearInterval(interval);


}
},10);

});
// MENU MOBILE

// const menuToggle = document.querySelector(".menu-toggle");
// console.log(menuToggle);

// const navMenu = document.querySelector("#nav-menu");


// menuToggle.addEventListener("click",()=>{


// navMenu.classList.toggle("active");


// });
document.addEventListener("DOMContentLoaded",()=>{


const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("#nav-menu");


menuToggle.onclick=function(){

navMenu.classList.toggle("active");

};


});