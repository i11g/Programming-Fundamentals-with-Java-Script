//repeat(count) of a string or symbol
function star() {

    let number=5; 

    for(let i=0; i<=number; i++) 
    {
       console.log("-*-".repeat(i));
    }
}

star();

//Trim() method to remove whitespaces(spaces, tabs, no-break space, etc.) from both end of a string

function text () {

    let text="  Some spaces           ";
    console.log(text.trim());
}
text();
//trimStart() or trimEnd() to remove whitespaces only at the begging or at the end 

function text1() {

    let text1="       Space 123     ";
    text1=text1.trimStart();
    console.log(text1);
}
text1();

//startsWith() determine whether a string begins with the charaacters of a specified substring 

function start() {

    let text2="I love Sofia"; 
    console.log(text2.startsWith('I'));
    console.log(text2.startsWith('My'));
}
start();
//endsWith() determine whether a string ends wit the characters of a specified substring 

function ends() {
   
    let text="Buy some food";
    console.log(text.endsWith('food'));
    console.log(text.endsWith('Buy'));
}
ends();