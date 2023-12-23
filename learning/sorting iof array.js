function max(array){
    let result=array[0]
    for (const arr of array){
        if(arr>result)
        result=arr
    }
    return {result}
}
function min(array){
    let result=array[0]
    for (const arr of array){
        if(arr<result)
        result=arr
    }
    return {result}
}
const a=[1,2,3,4,56,1,3,8,7,25,1]
console.log(max(a))
console.log(min(a))
