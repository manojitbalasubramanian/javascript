const array=[1,2,3,4,5,6,7,8]

/* normal method
const filter=(arr,num)=>{
    let result=[]
    for(number of arr){
        if(number>num){
            result.push(number)
        }
    }
    return {result}
}
console.log(filter(array,3))
*/

console.log(array.filter(num =>(num>=2)))