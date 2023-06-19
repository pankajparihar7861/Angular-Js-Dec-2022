function test(n1:number,...values:number[])
{
    let result=n1;
for(let value of values)
{
result+=value;
}
console.log(result);
}

test(10,3,4,5,6,8)