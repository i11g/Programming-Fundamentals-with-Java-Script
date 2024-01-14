function gradius (input) {

    let radians=Number(input[0]);

    let gradius=radians*180/Math.PI;

    console.log(gradius); 
}

gradius(["30"]);