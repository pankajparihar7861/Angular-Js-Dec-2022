let myArr:number[]=[10,20,30];
/*for(let element of myArr)
{
   console.log(element);
}*/

//spread operator can be used to create a copy of an array as well as merge the arrays

let myArr2:number[]=[...myArr];
let mergedArr:number[]=[...myArr,...myArr2];
for(let element of mergedArr)
{
   console.log(element)
}