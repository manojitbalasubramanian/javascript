const prompt=require("prompt-sync")({sigint:true}); 

let food=Number(prompt("Enter the price of the food :"));
let tipamount=Number(prompt("enter tip amount in :"));
totalamount=tipamount+food;
console.log("The total amount is "+totalamount);