/* Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const descuentosViajes=()=>{
    console.log("---------VIAJES TURISTICOS-------------")
    console.log("---------Origen del viaje - La Ciudad de Palma-------------")
    rl.question("¿Que destino prefieres?, Escoje el numero de opcion: \n1.La costa del Sol \n2.Panchimalco, \n3.Puerto el Triunfo): ", (opcion) => {
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
                    descuento = 15;
                    console.log("El descuento es:"+descuento+"%")
                    break;
                default:
                    console.log("El destino seleccionado no está disponible.\n");
                    descuentosViajes();
                    return;
            }
        rl.close();
    }else{
        console.log("\nDebes seleccionar un número válido.");
        descuentosViajes();
        return;
    }
   });
}

descuentosViajes();