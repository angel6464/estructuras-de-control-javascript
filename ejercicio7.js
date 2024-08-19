/*Se realiza la carga de 10 valores enteros por teclado en javascript. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;
let contador = 0;

const obtenerNumeros =()=> {
    rl.question(`Ingresa el número ${contador + 1}: `, (numero) => {
         numero = parseInt(numero,10);
        if (numero < 0) {
            negativos++;
        } else if (numero > 0) {
            positivos++;
        }

        if (numero % 15 == 0) {
            multiplosDe15++;
        }

        if (numero % 2 == 0 & numero>0) {
            sumaPares=sumaPares+numero;
        }

        contador++;
        
        if (contador < 10) {
            obtenerNumeros();
        } else {
            console.log(`Cantidad de valores negativos: ${negativos}`);
            console.log(`Cantidad de valores positivos: ${positivos}`);
            console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
            console.log(`Suma de los números pares(No incluye negativos): ${sumaPares}`);
            rl.close();
        }
    });
}

obtenerNumeros();