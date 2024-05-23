const btnE1=document.querySelector(".btn")
btnE1.addEventListener("mouseover",(Event)=>{
    console.log(event.pageX-btnE1.offsetLeft);
    const x= event.pageX-btnE1.offsetLeft;
    const y=event.pageY-btnE1.offsetTop;
    console.log(x);

    btnE1.style.setProperty("--xPos",x+"px");
    btnE1.style.setProperty("--yPos",y+"px");
})