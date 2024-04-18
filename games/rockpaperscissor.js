const computerchoicedisplay = document.getElementById("computerchoice")
const userchoicedisplay = document.getElementById("userchoice")
const resultdisplay = document.getElementById("result")
const scoredisplay = document.getElementById("score")
let resetbtn = document.getElementById("reset")

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

    computerchoicedisplay.innerHTML=computerchoice
}
let result
let score=0
function getresult(){
    if(userchoice===computerchoice)
        {result="draw"
        score += 0}
    else if(userchoice=="rock" && computerchoice=="paper")
        {result="win"
        score += 1}
    else if(userchoice=="paper" && computerchoice=="rock")
        {result="win"
        score += 1}
    else if(userchoice=="scissor" && computerchoice=="paper")
        {result="win"
        score += 1}
    else  
        {result="lose"
        score -= 1}
    resultdisplay.innerHTML = result
    scoredisplay.innerHTML =score
}

resetbtn.onclick = () => resetrr()
function resetrr(){
console.log("asdfgh")
computerchoicedisplay.innerHTML=''
userchoicedisplay.innerHTML=''
resultdisplay.innerHTML=''
scoredisplay.innerHTML=''
}