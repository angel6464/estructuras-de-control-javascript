/*EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const descuentosCoches=()=>{
    console.log("---------COCHES EN VENTAS-------------")
    rl.question("¿Qué coche deseas comprar, Escoje el numero de opcion: \n1.FORD FIESTA \n2.FORD FOCUS, \n3.FORD ESCAPE): ", (opcion) => {
        opcion=parseInt(opcion,10);
        let descuento=0

        if (!isNaN(opcion) && opcion>0 ) {

            switch (opcion) {
                case 1:
                    descuento = 5;
                    console.log("El descuento es:"+descuento+"%")

                    break;
                case 2:
                    descuento = 10;
                    console.log("El descuento es:"+descuento+"%")
                    break;
                case 3:
                    descuento = 20;
                    console.log("El descuento es:"+descuento+"%")
                    break;
                default:
                    console.log("El coche seleccionado no está disponible.");
                    descuentosCoches();
                    return;
            }
        rl.close();
    }else{
        console.log("\nDebes seleccionar un número válido.");
        descuentosCoches();
        return;
    }
   });
}

descuentosCoches();
