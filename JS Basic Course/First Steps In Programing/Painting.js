function painting (input) {

    let naylon=Number(input[0]);

    let lietrsOfPaint=Number(input[1]);
    let literOfSeparator=Number(input[2]);
    let numberOfHours=Number(input[3]);

    let sum=(naylon+2)*1.50+(lietrsOfPaint*1.1)*14.50+literOfSeparator*5.00+0.40

    let sumWorkers=numberOfHours*(sum*0.3);

    let totalSum=sum+sumWorkers;

    console.log(totalSum);
}

painting(["10","11","4","8"]);