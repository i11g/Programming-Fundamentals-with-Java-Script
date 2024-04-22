function count(text,word) {
    let result1=0;
    let result2=0;
    let splitText=text.split(' ');
    for(let i=0; i<splitText.length; i++) {
        if(splitText[i]===word) {
            result1++;
        }
    }
    for (const w of splitText) {

        if(w===word) {
            result2++;
        }
    }
    console.log(result1);
    console.log(result2);

}
count('This is a word and it also is a sentence', 'is' )