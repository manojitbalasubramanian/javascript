const prompt=require("prompt-sync")({sigint:true}); 
let age=prompt("Enter your age : ");
if(age<18){
console.log("You are not eligible to vote");
}
else{
console.log("you are eligible to vote");
}

let climate=prompt("what about the climate out side");
if (climate=="rainy")
{console.log("take our umberlla");}
else if(climate=="sunny")
{console.log("take your sunglass");}
else 
console.log("Enter rainny or sunny correctly")