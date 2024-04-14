function pages (input) {

    let numberOfPages=Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let numberOfDays=Number(input[2]);

    let numberOfHours=(numberOfPages/pagesPerHour)/numberOfDays;

    console.log(numberOfHours);
}

pages (["432","15","4"])