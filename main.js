const btn2=document.querySelector("#btn1")
const text=document.querySelector("#text")
const btn1=document.querySelector("#btn2")

const span1=document.querySelector("#span1")

let x=0;
let y=600.72;
let d='$'


btn1.addEventListener("click",()=>{
    x++;
    text.innerHTML=x
    span1.innerHTML=d+y*x
})

btn2.addEventListener("click",()=>{
    if(x>1){
    x--;
    text.innerHTML=x
    span1.innerHTML=d+y*x
    }
    else{
    text.innerHTML=1
    span1.innerHTML=d+y*x


    }
})

