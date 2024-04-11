const arr=[1,2,3]

//const result=arr.reduce((pre,next)=>(pre+next))

const result=arr.reduce(function(pre,next){
    pre=pre+next
    return pre
},10)

console.log(result)