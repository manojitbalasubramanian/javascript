const num=[1,2,3,4]
/*
for(let i=0; i<num.length;i++){
    console.log(num[i])
}
*/
num2=[]

for (let number of num){
    console.log(number)
    num2.push(number*2)
}
console.log(num2)