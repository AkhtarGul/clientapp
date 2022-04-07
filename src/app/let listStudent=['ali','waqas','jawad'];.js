let listStudent=['ali','waqas','jawad'];
let i=listStudent.forEach( ii=>console.log(ii));
console.log({data:listStudent});
const arr=[5,1,3,2,6];
const listarr=arr.map(x=>x*2);
console.log(listarr);
console.log({data:arr.map(x=>x*3)}); 
console.log({res:arr.map(x=>x.toString())})
//filter
console.log(arr.filter(x=>x%2==0));

const user=[
  {firstName:"john",lastName:"Smith",age:24},
  {firstName:"kon",lastName:"Back",age:32},
  {firstName:"Smith",lastName:"Work",age:40},
  {firstName:"Tom",lastName:"You",age:40},
]

//Task get full name from array of objects
//[john Smith,kon Back, Smith Work]
console.log(user.map(x=>x.firstName+ " "+ x.lastName +"  age is:"+x.age));
// console.log(user.reduce(pre,curr=>{}))
const output=user.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
  }
  else{
    acc[curr.age]=1
  }
  return acc;
},{})
console.log(output);


