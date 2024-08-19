/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Temperaturas=()=>{
rl.question("Introduzca una temperatura en Celsius: ", (tempCelsius) => {
    if (isNaN(tempCelsius)) {
        console.log("Debes introducir un número, no se permiten letras.\n");
        Temperaturas();
        return;
    }
    tempCelsius = parseFloat(tempCelsius,10);
    const tempFahrenheit = (tempCelsius * (9 / 5))+ 32;
    let mensaje = '';
    
    if (tempFahrenheit >= 14 && tempFahrenheit <= 32) {
        mensaje = 'Temperatura baja';
    } else if (tempFahrenheit >= 32 && tempFahrenheit <= 68) {
        mensaje = 'Temperatura adecuada';
    } else if (tempFahrenheit >= 68 && tempFahrenheit <= 96) {
        mensaje = 'Temperatura alta';
    } else {
        mensaje = 'Temperatura desconocida';
    }
    
    console.log(`La temperatura en Fahrenheit es: ${tempFahrenheit}°F, ${mensaje}`);
    rl.close();
});
}

Temperaturas();