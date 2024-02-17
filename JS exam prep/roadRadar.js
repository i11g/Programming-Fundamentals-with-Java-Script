function roadRadar(speed,area) {
       
    if(area==="city") {
        
        let difference=speed-50;

        if(speed<=50) {
            console.log(`Driving ${speed} km/h in a ${50} zone`)
        }
        else if(speed>50&&speed<=70) {
            
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - speeding`);
        }
        
        else if(speed>50&&speed<=110) {

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - excesive speeding`);

        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - reckless driving`);

        }
    }
    else if(area==="motorway") {
        let difference=speed-130;

        if(speed<=130) {
            console.log(`Driving ${speed} km/h in a ${130} zone`)
        }
        else if(speed>150&&speed<=170) {
            
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - speeding`);
        }
        
        else if(speed>130&&speed<=170) {

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - excesive speeding`);

        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - reckless driving`);

        }

    }
    else if(area==="interstate") {
        let difference=speed-90;

        if(speed<=90) {
            console.log(`Driving ${speed} km/h in a ${90} zone`)
        }
        else if(speed>90&&speed<=110) {
            
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - speeding`);
        }
        
        else if(speed>90&&speed<=130) {

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - excesive speeding`);

        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - reckless driving`);

        }

    }
    else if(area==="residential") {
        let difference=speed-20;

        if(speed<=20) {
            console.log(`Driving ${speed} km/h in a ${20} zone`)
        }
        else if(speed>20&&speed<=40) {
            
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - speeding`);
        }
        
        else if(speed>20&&speed<=70) {

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - excesive speeding`);

        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - reckless driving`);

        }

    }

}

roadRadar(200,'motorway')