let red=document.getElementById('red')
let yellow=document.getElementById('yellow')
let green=document.getElementById('green')

/*red.onclick=()=>console.log("red")
yellow.onclick=()=>console.log("yellow")
green.onclick=()=>console.log("green")
*/

const square= document.querySelectorAll(".colorbutton")

//console.log(square[0].value)
const timesclicked={'red':0,'yellow':0,'green':0}
square.forEach(squares=>
    {
        squares.onclick=()=>{timesclicked[squares.value]+=1
        squares.innerText=timesclicked[square.value]
        }
        //console.log(square.value)
    })
    