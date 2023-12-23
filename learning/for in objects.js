const prompt=require("prompt-sync")({sigint:true}); 
function countletters(letter){
    let result=0   //define previous the loop
    for(const count in letter){
//in is to count the index//of is to print the value

        //console.log(Number(count)+1)
        result=count
    }
    return {result:Number(result)+1}
    //{result:result} in this second result is the value
    //first is like a character
}
let input=prompt("Enter the char to count :")

console.log(countletters(input))
//.length is the easy way
console.log("using .lenght function : "+ input.length)