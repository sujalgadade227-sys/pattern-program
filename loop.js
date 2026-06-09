var a=1
while(a<=10)
{

    console.log(a);
    a++;
}

var b =10
while(b>=1){
    
    console.log(b);
    b--;
   
}
var c=1
var sum=0;
while(c<=10)
{
    sum=sum+c;
    c++
    
}
console.log(sum);
function getFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const number = 5;
console.log(`The factorial of ${number} is ${getFactorial(number)}`);