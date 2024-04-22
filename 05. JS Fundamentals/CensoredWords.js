function words(sentence,string) {
    
    let censored=sentence.replace(string, repeat(string));

    while(censored.inludes(string)) {

        censored=censored.replace(string, repeat(string));
    }

}

words('A small sentence with some words', 'small' )