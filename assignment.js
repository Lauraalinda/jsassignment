for (let i=1; i<1000; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

var sum=0
for(let i=0; i<1000; i++){
    if (i%3==0 || i%5==0){
        sum+=i
    }
}
console.log(sum)

for (let i=0; i<20; i++){
    if (i%2==0){
        console.log(i + " is even")
    }else{
        console.log(i + " is odd") 
    }
}


let num = [-2, 4,-5, 6, 0];
largest = x[0];
for (let i=0; i<num.length; i++){
    if (x[i] > largest){
        largest = x[i];
    }
}
console.log(largest)

function determine(x,y){
if (x>y){
    console.log(x + " is greater than "+ y)
}else if(y>x){
    console.log(y + " is greater than "+ x)
}else{
    console.log(y + " is equal to"+ x)
}
}
determine(10,40)


for (let year=2000; year<=2022; year++){
    if ((year%400==0) || (year%4==0) && (year%100!=0)){
       console.log(year)
    }
} 
