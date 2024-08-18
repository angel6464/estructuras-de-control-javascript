const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto para almacenar los datos del estudiante
const datosEstudiante = {};

// Función para preguntar el nombre
const preguntarNombre = () => {
    rl.question("Por favor, ingresa el nombre del estudiante: ", (nombre) => {
        datosEstudiante.nombre = nombre;
        preguntarEdad(); // Llamamos a la siguiente función
    });
};

// Función para preguntar la edad
const preguntarEdad = () => {
    rl.question("Por favor, ingresa la edad del estudiante: ", (edad) => {
        datosEstudiante.edad = parseInt(edad, 10);
        preguntarCarrera(); // Llamamos a la siguiente función
    });
};

// Función para preguntar la carrera
const preguntarCarrera = () => {
    rl.question("Por favor, ingresa la carrera del estudiante: ", (carrera) => {
        datosEstudiante.carrera = carrera;
        mostrarDatos(); // Llamamos a la función que mostrará los datos
    });
};

// Función para mostrar los datos del estudiante
const mostrarDatos = () => {
    console.log(`Nombre: ${datosEstudiante.nombre}`);
    console.log(`Edad: ${datosEstudiante.edad}`);
    console.log(`Carrera: ${datosEstudiante.carrera}`);
    rl.close(); // Cerramos la interfaz de readline
};

// Iniciamos el flujo llamando a la primera función
preguntarNombre();
