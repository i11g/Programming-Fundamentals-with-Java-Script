function school (input) {

    let packetsOfPens=Number(input[0]);
    let packetsOfMarkers=Number(input[1]);
    let litersOfCleaning=Number(input[2]);

    let percentDiscount=Number(input[3]);

    let sum=(packetsOfPens*5.80+packetsOfMarkers*7.20+litersOfCleaning*1.20);

    let totalSum=sum-sum*(percentDiscount/100);

    console.log(totalSum);

}

school(["2","3","4","25"])