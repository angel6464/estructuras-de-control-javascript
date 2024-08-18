/*
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto para almacenar los datos del trabajador
const datosTrabajador = {};

// Función para preguntar el nombre
const preguntarNombre = () => {
    rl.question("Por favor, ingresa el nombre del Trabajador: ", (nombre) => {
        // Usamos una expresión regular para verificar que solo contenga letras y espacios
        if (/^[a-zA-Z\s]+$/.test(nombre)) {
            datosTrabajador.nombre = nombre;
            preguntarSalario(); // Llamamos a la siguiente función
        }else{
            console.log("El nombre solo debe contener letras y espacios. Inténtalo de nuevo.");
            preguntarNombre(); // Volvemos a preguntar el nombre en dado caso no funcione
        }
    });
};


// Función para preguntar el salario
const preguntarSalario = () => {
    rl.question("Por favor, ingresa el salario del Trabajador: ", (salario) => {
        salario = parseInt(salario, 10);
        // Validamos que sea un número y esté en el rango permitido
        if (!isNaN(salario) && salario > 0) {
            datosTrabajador.salario = salario;
            preguntarCategoria(); // Llamamos a la siguiente función
        } else {
            console.log("Por favor, ingresa una cantidad valida no deben ser letras.");
            preguntarSalario(); // Volvemos a preguntar la edad
        }
    });
};

// Función para preguntar la categoria
const preguntarCategoria = () => {
    console.log("")
    console.log("----CATEGORIAS DISPONIBLES")
    console.log("A 15%\nB 30%\nC 10%\nD 20%");

    rl.question("Por favor, ingresa la categoria del Trabajador: ", (categoria) => {

        if (/^[a-zA-Z\s]+$/.test(categoria)) {
            switch(categoria) {
                case 'A':
                var aumento=(datosTrabajador.salario*0.15);
                datosTrabajador.aumento=aumento;
                    break;
                case 'B':   
                var aumento=(datosTrabajador.salario*0.30);
                datosTrabajador.aumento=aumento;
                    break;
                case 'C':
                    var aumento=(datosTrabajador.salario*0.10);
                    datosTrabajador.aumento=aumento;
                    break;
                case 'D':
                    var aumento=(datosTrabajador.salario*0.20);
                    datosTrabajador.aumento=aumento;
                    break;
                default:
                        console.log("No existe la categoria: " + categoria);
                        preguntarCategoria(); // Volvemos a preguntar la categoría en caso de error
                        return;
                }
    
                mostrarDatosTrabajador(); 
                rl.close(); // Cerramos la interfaz de readline
            } else {
                console.log("Por favor, ingresa una categoría válida recuerda que debe ser mayusculas.");
                preguntarCategoria(); // Volvemos a preguntar la categoría
            }
        });
    };
    
    // Función para mostrar los datos del trabajador
    const mostrarDatosTrabajador = () => {
        console.log("\n-----------------------------");
        console.log(`Nombre: ${datosTrabajador.nombre}`);
        console.log(`Salario: ${datosTrabajador.salario}`);
        console.log(`Aumento: ${datosTrabajador.aumento}`);
        console.log(`Salario Total: ${datosTrabajador.salario + datosTrabajador.aumento}`);
        console.log("-----------------------------");
    };
    
    // Iniciamos el flujo llamando a la primera función
    preguntarNombre();