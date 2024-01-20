function repeat(string, count) {
   
    let repeatString=""; 
    for(let i=0; i<count; i++) {
        repeatString+=string;
    }
    console.log(repeatString);
}
repeat("abc", 3 )