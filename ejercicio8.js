/**Escriba un programa en javascript que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tablasMultiplicar=()=>{
rl.question("Por favor, ingresa un número: ", (numero) => {
    numero = parseInt(numero, 10);
    
    if (!isNaN(numero) && numero > 0) {
        console.log("Tabla de multiplicar del", numero, ":");
            for (let i = 1; i <= 10; i++) {
                console.log(`${numero} x ${i} = ${numero * i}`);
            }
    } else {
        console.log("Por favor, ingresa un número válido.\n");
        tablasMultiplicar();
        return; //para finalizar hasta esta parte la funcion y que inicie de nuevo como un bucle.
    }
    rl.close();
})
}

tablasMultiplicar();