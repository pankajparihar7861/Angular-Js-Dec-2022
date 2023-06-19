function test(){
    const pi=3.14;
    var num1:number=10;
    {
        let num2:number=20;
        console.log(num1);
        console.log(num2);
    }
    console.log(num1);
    console.log(num2);
}
test();