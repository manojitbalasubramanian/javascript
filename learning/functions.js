const prompt=require("prompt-sync")({sigint:true})
/*
function sum(a,b){
    return a+b;
}
*/
const sum=(a,b)=>a+b   //implicit return

const sum1 =(a,b)=>{   //explicit return
    return a+b
}
/*
let n1=Number(prompt("num1="));
let n2=Number(prompt("num2="));
console.log("sum="+sum(n1,n2));
*/

let food=Number(prompt("Enter the price of the food :"))
let tipamount=Number(prompt("enter tip amount in :"))
console.log("The total amount is "+sum(food,tipamount))
console.log("The total amount is "+sum1(food,tipamount))