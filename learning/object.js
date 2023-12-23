/*const car ={
    color:"white",
    price:`1.5l`,
    engine:"bs6",
    break:'abs'
}
 
console.log(car)*/

/*car['ownership']='2nd'
console.log(car.ownership)*/

//function sampleproducts(mob,lap){
const products={
    mobile: 'mob',
    mobileprice: 18000,
    laptop : 'lap',
    laptopprice  :52000,
    totalprice: function(){
        return this.mobileprice + this.laptopprice   //this assume the imagination od object
    }
}
console.log(products.totalprice())

/*console.log(`i am having a "${products.mobile}" mobile and my lap top model is "${products.laptop}"`)}
sampleproducts("realme","asus-vivobook")*/

/*const asdf=`i am having a "${products.mobile}" mobile and my lap top model is "${products.laptop}"`
return asdf
}
console.log(sampleproducts("realme","asus-vivobook"))*/