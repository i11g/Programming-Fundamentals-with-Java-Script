function division (num) {

    if(num%2==0&&num%3==0) {
        console.log(6);
    }
    else if(num%3==0&&num%7) {
        console.log(7)
    }
    else if(num%3==0) {
        console.log(3);

    }
    else if(num%2==0&&num%10==0) {
        console.log(10);

    }
    else if(num%2==0) {
        console.log(2);

    }
    else if(num%2!=0&&num%3!=0&&num%7!=10) {
        console.log("Not divisible");
    }
}
division(1643);