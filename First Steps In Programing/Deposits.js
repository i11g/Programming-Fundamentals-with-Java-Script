function deposits (input) {

    let depositSum=Number(input[0]);
    let depositTime=Number(input[1]);
    let interestRate=Number(input[2]);

    let totalSum=depositSum+depositTime*(depositSum*(interestRate/100)/12);
    console.log(totalSum);

}

deposits(["200","3","5.7"])
deposits(["2350","6","7"])