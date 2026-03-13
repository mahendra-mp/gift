/* star sky */

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}


/* floating hearts */

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

}

setInterval(createHeart,500);


/* page change */

function nextPage(page){

document.querySelector(".active").classList.remove("active");

document.getElementById("page"+page).classList.add("active");

}


/* no message */

function noMessage(page,msg){

alert(msg);

nextPage(page);

}


/* resize yes/no buttons */

let yesSize=18;
let noSize=18;

function resizeButtons(){

yesSize+=5;
noSize-=2;

document.getElementById("yesBtn").style.fontSize=yesSize+"px";
document.getElementById("noBtn").style.fontSize=noSize+"px";

}


/* final page */

function showFinal(){

document.querySelector(".active").classList.remove("active");

document.getElementById("finalPage").classList.add("active");

typingMessage();

}


/* typing message */

const message="Your birthday is coming in about 56 days 🎂. I know you always say not to spend money on gifts, but your friendship itself means a lot to me. I just wanted to do something small to make you smile.";

let i=0;

function typingMessage(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typingMessage,40);

}

}
