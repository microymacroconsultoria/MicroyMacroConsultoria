// animación al hacer scroll

function reveal(){

let reveals=document.querySelectorAll(".reveal");

reveals.forEach((el)=>{

let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;
let elementVisible=100;

if(elementTop<windowHeight-elementVisible){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);


// contador animado

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");
const c=+counter.innerText;

const increment=target/200;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;
setTimeout(updateCounter,10);

}else{

counter.innerText=target;

}

};

updateCounter();

});
