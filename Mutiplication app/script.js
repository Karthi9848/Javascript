const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

console.log(num1);
const questionE1=document.getElementById("question");
const inputE1=document.getElementById("input")
const formE1=document.getElementById("forms")
const scoreE1=document.getElementById("score")

let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scoreE1.innerHTML=`score:${score}`;
questionE1.innerHTML=`what is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;
formE1.addEventListener("submit",()=>{
    const userAns=+inputE1.value;
    if(userAns===correctAns){
        score++;
        updateLocalstorge();

    }
    else{
        score--;
        updateLocalstorge();
    }
});
function updateLocalstorge(){
    localStorage.setItem("score",JSON.stringify(score));
}

