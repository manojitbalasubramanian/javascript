const computerchoicedisplay = document.getElementById("computerchoice")
const userchoicedisplay = document.getElementById("userchoice")
const resultdisplay = document.getElementById("result")

const possiblechoices = document.querySelectorAll("button")

let userchoice
let computerchoice
possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener("click",(q)=>{
    userchoice = q.target.id
    userchoicedisplay.innerHTML= userchoice
    generatecomputerchoice()
    getresult()
}))

function generatecomputerchoice(){
    const randomnum =Math.floor(Math.random()*3)+1

    if(randomnum===1){
        computerchoice="rock"}
    
    if(randomnum===2){
        computerchoice="paper"}
    
    if(randomnum===3){
        computerchoice="scissor"}

    computerchoicedisplay.innerText=computerchoice
}
let result
function getresult(){
    if(userchoice===computerchoice)
        {result="draw"}
    else if(userchoice=="rock" && computerchoice=="paper")
        {result="win"}
    else if(userchoice=="paper" && computerchoice=="rock")
        {result="win"}
    else if(userchoice=="scissor" && computerchoice=="paper")
        {result="win"}
    else  
        {result="lose"}

    resultdisplay.innerHTML = result

}