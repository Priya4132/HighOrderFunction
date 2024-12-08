// Q11. L0 - Transforming and Filtering with map() and forEach()
let input=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(){
  

let productNames=input.map((el,i)=>el.name);
// console.log(productNames);
let data=input.forEach((el,i)=>{
  if(el.price>50){
    console.log(`${el.name} is above $50`);
  }
  else{
    console.log(`${el.name} is below $50`);
  }
})

}
processProducts();