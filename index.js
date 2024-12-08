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

// Q12.L0 - Filter and Sort Data with Higher-Order Functions
let arr= [ { name: "Alice", marks: 58 },

    { name: "Bob", marks: 85 },
    
    { name: "Charlie", marks: 92 },
    
    { name: "David", marks: 45 } ]
    function processStudents(arr){
     
    let filteredArray=arr.filter((el,i)=>el.marks>60? el.name:null)
    // return filteredArray
    let sortedArray=filteredArray.sort((a,b)=>b.marks-a.marks);
    // return sortedArray
    let finalData=sortedArray.map((ele,i)=>ele.name)
    return finalData
    
    }
    console.log(processStudents(arr));


    // Q13.L1 - Grouping and Summing with reduce()
    let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
 let ans=arr.reduce((a,el,i)=>{
   a[el]==undefined? a[el]=1:a[el]++ //if data is not defined in object assign it to value 1 or if is present increase the count
   return a
   },{}
   );
   console.log(ans);
  // Extra Challenge
   let ans1=Object.entries(ans); //changing object into subarray  of key -value pairs inside an array
 console.log(ans1);
   console.log(ans1.sort((a,b)=> a[1]<b[1]? 1:-1));//sorting result into descending order of count of categories
   

