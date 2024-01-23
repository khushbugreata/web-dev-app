 const generaRandom=()=>{
let random=Math.floor(Math.random() * 16777215);
let code="#" + random.toString(16);
document.body.style.backgroundColor=code;
document.querySelector(".col-text").innerHTML=code;
}

let btn=document.querySelector(".btn");
btn.addEventListener("click",generaRandom);

generaRandom();