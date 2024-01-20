
    let car={model:'Porshe', color:'green', year:'2014'} ;
    car.tires=function(tires){
      return 'four tires';
    }; 
    car.tires();
    console.log(car);
  
    
    //Build-in Methods

    //Get keys
    //Object.keys(person);
    //Get values
    //Object.values(person);
    //Get an array of all properties as key-value tuples
   // Object.entries(person); 
    //[['model','Porshe],['color','green']]

    
    let softUniStudent= 
    {
        userName:'Ivan',
        age:'25',
        averageGrade:'5.5', 

        sayHello () {
            console.log('Huy guys');
        }
       
        
    } 

    softUniStudent.sayHello(); 
    softUniStudent.location='Sofia';
    console.log(softUniStudent);
