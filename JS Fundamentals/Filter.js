function filterring() {

    let numbers= [2, 5, 8, 10, 30];
    
    let filterredNum=numbers.filter(function(num) {
        return num%2==0
    });

    let filterNumbers=numbers.filter(number=>{return number/2>5});

    console.log(filterNumbers) ;
}
filterring();