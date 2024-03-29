//Replace Operation 
//replace(search, replacement) 

function some() {

    let text="Hello, john@sfotuni.bg, you have been using jonh@softuni.bg in your registration";
    let replacedText=text.replace(".bg",".com");

    console.log(replacedText);
}

some();

//split (separator) 

function words() {

    let text="I lova banana"; 
    let words=text.split(' '); 
    console.log(words);
}
words();

//includes - chek is a string contains a substring 

function input() {

    let text="I love basketbol";
    console.log(text.includes("banana"));
    console.log(text.includes("love")); 
}
input();