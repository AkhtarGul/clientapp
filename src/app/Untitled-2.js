
const arr=[5,4,3,6,2,7];

function findSum(arr){
  sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
}
console.log(findSum(arr));

function findMax(arr){
  max=0;
  for(let i=0;i<arr.length;i++){
      if(arr[i]>0){
        max=arr[i];
      }
      
  }
  return max;
}
console.log(findMax(arr));
//reduce iterate over the array it have two param which acc and curr =>acc start from 0 and curr basically the value of array
const output=arr.reduce(function(acc,curr){
  acc=acc + curr;
  return acc;
},0);
console.log(output);


//find max via reduce method in js
const maxoutput=arr.reduce((acc,curr)=>{
  if(curr>acc){
    acc=curr;
  }
  return acc;
})
console.log(maxoutput)

//type object use filter,map and reduce
const user=[
  {firstName:"john",lastName:"Smith",age:24},
  {firstName:"kon",lastName:"Back",age:32},
  {firstName:"Smith",lastName:"Work",age:40},
  {firstName:"Tom",lastName:"You",age:40},
  
  {firstName:"kon",lastName:"Back",age:32},
  {firstName:"Smith",lastName:"Work",age:40},
  {firstName:"Tom",lastName:"You",age:40},
]
const agePerson=user.reduce((acc,curr)=>{
      if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
      }
      else{
        acc[curr.age]=1

      }
      return acc;
},{});
console.log(agePerson);


const Name=user.reduce((acc,current)=>{
  if(current.age<30){
    acc.push(current.firstName);
  }
  return acc;
},[])
console.log(Name);

const fullName=user.map(x=>x.firstName+ " "+ x.lastName);
console.log(fullName);

const highAge=user.filter(x=>x.age>35);
console.log(highAge);

var result = highAge.reduce((unique, o) => {
  if(!unique.some(obj => obj.label === o.label && obj.value === o.value)) {
    unique.push(o);
  }
  return unique;
},[]);
console.log(result);