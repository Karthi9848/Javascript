const textareaE1=document.getElementById("textarea")
const totalE1= document.getElementById("total")
const RemainingE1= document.getElementById("Remaining")

textareaE1.addEventListener("keyup",()=>{
     console.log("keyoress");
     updateCounter();
})
function updateCounter(){
    totalE1.innerHTML=textareaE1.value.length;
    RemainingE1.innerHTML=textareaE1.getAttribute("maxLength")-textareaE1.value.length;
}
updateCounter()
