function oscars(input) {

    let index=0; 
    let actorName=input[index];
    index++;
    let pointsFromAcademy=Number(input[index]);
    index++;
    let numberOfJury=Number(input[index]);
    let points=0;

    for (let i=0; i<=numberOfJury; i++) {
        let currentJuryNmae=input[index];
        index++;
        let currentPoints=input[index];
        points+=currentJuryNmae.length*currentPoints/2;
       
        }

        if(points>=1250.5) {
            console.log(actorName);
        }
        else{
            console.log("sorry")
        }

}
oscars(["zahary","100","3","Petko radev","Gencho Petkov", "Metodi Metodiev"]);