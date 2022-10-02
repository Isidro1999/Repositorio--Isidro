let personaBautista = require("./Bautista_Azize");
let personaIsidro = require("./isidro_anchelerguez");
let personaLuis = require("./Luis_Marino");
("Hola soy "+personaLuis[0]+ " disfrtuo de "+ personaLuis[1]+ " y soy de "+ personaLuis[2]);





//Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

//Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

//La función entrenarHoras tiene las siguientes tres características:

//Recibe por parámetro la cantidad de horas.
//Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.



//Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador ternario. El operador ternario debe comparar los rodados de ambas bicicletas y retornar la que tenga el mayor rodado.


let bicicletaA = {
  rodado: 18,
  marca: "Mountain Bike"
}
let bicicletaB = {
  rodado: 24,
  marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ?  bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
console.log(1)


    

  





 
    


























