function mapping() {

    let numbers=[1, 4, 25]; 
    
    let roots=numbers.map(number=>{return Math.sqrt(number)});
    
    let roots1=numbers.map(function(number){
        return Math.sqrt(number);
    })

    let roots2=numbers.map(num=>{return num*5});

    let root3=numbers.map(num=>{return num*100});

    console.log(root3); 

}

mapping();