function vacation (quantity,typeOfTheGroup,day) {
    let totalPrice=0;

    if(typeOfTheGroup=="Students"&&day=="Sunday") {
        if(quantity>=30) 
        {
            totalPrice=quantity*10.46*0.85;
        }
        else {
            totalPrice=quantity*10.46
        }
    }
    else if (typeOfTheGroup=="Students"&&day=="Saturday") {
        if(quantity>=30) 
        {
            totalPrice=quantity*9.80*0.85;
        }
        else {
            totalPrice=quantity*9.80
        }
    }
    else if(typeOfTheGroup=="Students"&&day=="Friday") {
        if(quantity>=30) 
        {
            totalPrice=quantity*8.45*0.85;
        }
        else {
            totalPrice=quantity*8.45
        }
    }
    else if(typeOfTheGroup=="Business"&&day=="Sunday") {
        if(quantity<=100) 
        {
            totalPrice=quantity*16;
        }
        else {
            totalPrice=quantity*16-10*16;
        }
    }
    else if (typeOfTheGroup=="Business"&&day=="Saturday") {
        if(quantity<=100) 
        {
            totalPrice=quantity*15.60;
        }
        else {
            totalPrice=quantity*15.60-10*15.60;
        }
    }
    else if(typeOfTheGroup=="Business"&&day=="Friday") {
        if(quantity<=100) 
        {
            totalPrice=quantity*10.90;
        }
        else {
            totalPrice=quantity*10.90-10*10.90;
        }
    }
    else if(typeOfTheGroup=="Regular"&&day=="Sunday") {
        if(quantity>=10&&quantity<=20) 
        {
            totalPrice=quantity*22.50*0.95;
        }
        else {
            totalPrice=quantity*22.50;
        }
    }
    else if (typeOfTheGroup=="Regular"&&day=="Saturday") {
        if(quantity>=10&&quantity<=20) 
        {
            totalPrice=quantity*20*0.95;
        }
        else {
            totalPrice=quantity*20;
        }
    }
    else if(typeOfTheGroup=="Regular"&&day=="Friday") {
        if(quantity>=30) 
        {
            totalPrice=quantity*15*0.95;
        }
        else {
            totalPrice=quantity*15;
        }
    }
    console.log(totalPrice.toFixed(2));
}

vacation (40, "Regular", "Saturday" );