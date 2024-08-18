const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor, ingresa tu edad: ", (edad) => {
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "No eres mayor de edad.";
    console.log(mensaje);
    rl.close();
});