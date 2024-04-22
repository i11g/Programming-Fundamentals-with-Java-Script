function city (name,area,population,country,postcode) { 

    let city = 
    {  
        name: name,
        area: area,
        population: population,
        country:country,
        postCode: postcode,

    } 

    for (let key in city) 
    {   
        let value=city[key]; 
        console.log(`${key} -> ${value} `)
    }  ;     
          
          
   }

city("Sofia","Bulgaria",1000,"Bul", 1204);