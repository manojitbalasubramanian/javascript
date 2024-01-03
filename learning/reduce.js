const arr=[1,2,3,4,5,6,7,8,9]

//const result=arr.reduce((pre,next)=>(pre+next))

const result=arr.reduce(function(pre,next){
    pre=pre+next
    return pre
})

console.log(result)