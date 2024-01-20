function countString(text, searchedWord) {

     let words=text.split(' ');
     let counter=0; 

    words.forEach(element => { 

        if(element===searchedWord) {

            counter++;
        }
        
    });
        
            
       
     
    

  console.log(counter);   

}

countString('This is a word and it also is a sentence', 'is' );

