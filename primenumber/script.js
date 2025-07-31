function cPrime(){
    const num = Number(document.getElementById('input').value);
    if(num<2){
         document.getElementById('result').textContent = `${num} is a non-prime number`;
         return;
    }
    let count=0;
    for(let i=1; i<=num ; i++){
        if(num%i==0){
            count++;
        }
    }
    if(count>2){
        document.getElementById('result').textContent = `${num} is a non-prime number`;
    }
    else {
        document.getElementById('result').textContent = `${num} is a prime number`;
    }
}