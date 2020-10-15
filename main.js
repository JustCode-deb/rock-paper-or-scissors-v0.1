
function piedraPapelTijera(question){
    var user_Option1;
    var user_Option2;
    var user_Option3;

    var userOption1;
    var userOption2;
    var userOption3;

    var pcOption1;
    var pcOption2;
    var pcOption3;
    
    //counting variables
    var userPiedra=0;
    var userPapel=0;
    var userTijera=0;

    var pcTijera=0;
    var pcPapel=0;
    var pcPiedra=0;

    var userPoints=0;
    var pcPoints=0;

    //reset
    pcPiedra=0;
    pcPapel=0;
    pcTijera=0;
    userPapel=0;
    userTijera=0;
    userPiedra=0;

    function points (user,pc){
        if(userTijera ===1 && pcTijera === 1){
            pcPoints++;
            userPoints++;
            alert("Empate");
        }else if (userPapel ===1 && pcPapel === 1){
            pcPoints++;
            userPoints++;
            alert("Empate");
        }else if(userPiedra === 1 && pcPiedra === 1){
            pcPoints++;
            userPoints++;
            alert("Empate");
        }else if (userTijera ===1 && pcPiedra === 1){
            pcPoints++;
            alert("1 Punto para la computadora");
        }else if(userTijera ===1 && pcPapel === 1){
            userPoints++;
            alert("1 Punto para ti");
        }else if(userPapel ===1 && pcPiedra === 1){
            userPoints++;
            alert("1 Punto para ti");
        }else if(userPapel ===1 && pcTijera === 1){
            pcPoints++;
            alert("1 Punto para la computadora");
        }else if(userPiedra ===1 && pcTijera === 1){
            userPoints++;
            alert("1 Punto para ti");
        }else if(userPiedra ===1 && pcPapel === 1){
            pcPoints++;
            alert("1 Punto para la computadora");
        }
        return userPoints,pcPoints;
    }

    function aleatorio(minimo, maximo){
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
    }

    /*
    //Unused function
    function validation (){
        var validInput = ["piedra","papel","tijera"];

        if (validInput.includes("piedra","papel","tijera" === true)){
            break;
        }else{
            while(validInput.includes("piedra","papel","tijera" === false)){
                prompt("Por favor ingresa una opcion valida")
            }
        }
        break;
    }*/

    //User
    alert("Esta es una partida de al mejor de 3");
    user_Option1 = prompt("Elije Piedra Papel o Tijera");
    userOption1=user_Option1.toLowerCase();
    while (typeof userOption1 !== 'string'){ //Text Validation
        userOption1	= prompt("Por favor ingresa texto!");
    }



    /*
    //Option Validation
    while(userOption1 !== "piedra" || userOption1 !== "papel" || userOption1 !== "tijera"){
        userOption1	= prompt("Por favor ingresa una opcion válida");
    }*/
    
    //counters
    if  (userOption1 === "piedra"){
        alert("Elegiste piedra");
        userPiedra++; 
    }else if (userOption1 === "papel"){
        alert("Elegiste papel");
        userPapel++;
    }else if (userOption1 === "tijera"){
        alert("Elegiste tijera")
        userTijera++;
    }

    //computer
    pcOption1 = aleatorio(0,2);

    if (pcOption1 === 0){
        alert("La computadora eligio piedra");
        pcPiedra++;
    }else if (pcOption1 === 1){
        alert("La computadora eligio papel");
        pcPapel++;
    }else if (pcOption1 === 2){
        alert("La computadora eligio tijera");
        pcTijera++;
    }

    
    //Points counter
    points();

    //reset
    pcPiedra=0;
    pcPapel=0;
    pcTijera=0;
    userPapel=0;
    userTijera=0;
    userPiedra=0;
    //user
    user_Option2 = prompt("Elije Piedra Papel o Tijera");
    userOption2=user_Option2.toLowerCase();
    while (typeof  userOption2 !== 'string'){//Text Validation
        prompt("Por favor ingresa texto!");
    }
    /*
    //Option Validation
    while(userOption2 !== "piedra" || userOption2 !== "papel" || userOption2 !== "tijera" ){
        userOption2	= prompt("Por favor ingresa una opcion válida");
    }*/

    //counters
    if  (userOption2 === "piedra"){
        alert("Elegiste piedra");
        userPiedra++; 
    }else if (userOption2 === "papel"){
        alert("Elegiste papel");
        userPapel++;
    }else if (userOption2 === "tijera"){
        alert("Elegiste tijera")
        userTijera++;
    }

    //computer
    pcOption2 = aleatorio(0,2);

    if (pcOption2 === 0){
        alert("La computadora eligio piedra");
        pcPiedra++;
    }else if (pcOption2 === 1){
        alert("La computadora eligio papel");
        pcPapel++;
    }else if (pcOption2 === 2){
        alert("La computadora eligio tijera");
        pcTijera++;
    }

    //Points counter
    points();

    //reset
    pcPiedra=0;
    pcPapel=0;
    pcTijera=0;
    userPapel=0;
    userTijera=0;
    userPiedra=0;
    //user
    user_Option3 = prompt("Elije Piedra Papel o Tijera");
    userOption3 = user_Option3.toLowerCase();
    while (typeof  userOption3 !== 'string'){//Text Validation
        prompt("Por favor ingresa texto!");
    }
    /*
    //Option Validation
    while(userOption3 !== "piedra" || userOption3 !== "papel" || userOption3 !== "tijera"){
        userOption3	= prompt("Por favor ingresa una opcion válida");
    }*/ 
    //counters
    if  (userOption3 === "piedra"){
        alert("Elegiste piedra");
        userPiedra++; 
    }else if (userOption3 === "papel"){
        alert("Elegiste papel");
        userPapel++;
    }else if (userOption3 === "tijera"){
        alert("Elegiste tijera")
        userTijera++;
    }

    //computer
    pcOption3 = aleatorio(0,2);

    if (pcOption3 === 0){
        alert("La computadora eligio piedra");
        pcPiedra++;
    }else if (pcOption3 === 1){
        alert("La computadora eligio papel");
        pcPapel++;
    }else if (pcOption3 === 2){
        alert("La computadora eligio tijera");
        pcTijera++;
    }

    //Points counter
    points();

    //reset
    pcPiedra=0;
    pcPapel=0;
    pcTijera=0;
    userPapel=0;
    userTijera=0;
    userPiedra=0;

    //counters_break
    if (pcPoints > 2){
        alert("Gana la computadora");
    }else if (pcPoints === userPoints){
        alert("Empate");
    }else{
        alert("Ganaste");
    }

}

question = prompt("Hola, quieres jugar Piedra, Papel o Tijera?");

if (question === "si" || question === "Si" || question === "SI" || question === "sI"){
    
    piedraPapelTijera();

}else{
    alert("Gracias por probar el programa!")
    console.clear();
}


