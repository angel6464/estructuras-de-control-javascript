/**Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.  */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = {};
// Función para preguntar el numero 1
const preguntarNum1= () => {
    rl.question("Por favor, ingresa el primer numero: ", (numero1) => {
        numero1 = parseInt(numero1, 10);

        // Validamos que sea un número y esté en el rango permitido
        if (!isNaN(numero1) && numero1 > 0) {
            numeros.numero1 = numero1;
            preguntarNum2(); // Llamamos a la siguiente función
        } else {
            console.log("Por favor, ingresa un numero válido  no deben ser letras.");
            preguntarNum1(); // Volvemos a preguntar la edad
        }
    });
};

// Función para preguntar el numero 1
const preguntarNum2= () => {
    rl.question("Por favor, ingresa el segundo numero: ", (numero2) => {
        numero2 = parseInt(numero2, 10);

        // Validamos que sea un número y esté en el rango permitido
        if (!isNaN(numero2) && numero2 > 0) {
            numeros.numero2 = numero2;
            mostrarDatos(); // Llamamos a la siguiente función
        } else {
            console.log("Por favor, ingresa un numero válido  no deben ser letras.");
            preguntarNum2(); // Volvemos a preguntar la edad
        }
    });
};

const mostrarDatos = () => {
    rl.close();
    console.log(" ");
    console.log("----------RESULTADO------------");
    if(numeros.numero1 > numeros.numero2){
        console.log(`El numero mayor es ${numeros.numero1}`);
    }else{
        console.log(`El numero mayor es ${numeros.numero2}`);
   }
}


preguntarNum1(); //inicializamos la primer funcion