function leapYear(year) {

    if(year%4==0||year%400==0){
        if(year!==100) {
            console.log('yes')
        }
        else {
            console.log('no')
        }

    }
    else {
        console.log('no')
    }   
}
leapYear(4)

function leapYear2(year) {

    const isleapYear= (year%4==0&&year%100!==0)||(year%400==0);
    const message=isleapYear ? "yes": "no";
    console.log(message);
}
leapYear2(2023);