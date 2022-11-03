function prime(){
    for(let i=0;i<Number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==2){
        return true
    }
    return false
}
let ans = prime(47);
if(ans==true){
    console.log(" prime number")
}else{
    console.log("not a prime number")
}