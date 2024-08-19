
/**Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

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
        // Usamos una expresión regular para verificar que solo contenga letras y espacios
        if (/^[a-zA-Z\s]+$/.test(nombre)) {
            datosEstudiante.nombre = nombre;
            preguntarEdad(); // Llamamos a la siguiente función
        } else {
            console.log("El nombre solo debe contener letras y espacios. Inténtalo de nuevo.");
            preguntarNombre(); // Volvemos a preguntar el nombre en dado caso no funcione
        }
    });
};

// Función para preguntar la edad
const preguntarEdad = () => {
    rl.question("Por favor, ingresa la edad del estudiante: ", (edad) => {
        edad = parseInt(edad, 10);

        // Validamos que sea un número y esté en el rango permitido
        if (!isNaN(edad) && edad > 0 && edad <= 100) {
            datosEstudiante.edad = edad;
            preguntarCarrera(); // Llamamos a la siguiente función
        } else {
            console.log("Por favor, ingresa una edad válida entre 1 y 100 y no deben ser letras.");
            preguntarEdad(); // Volvemos a preguntar la edad
        }
    });
};

// Función para preguntar la carrera
const preguntarCarrera = () => {
    rl.question("Por favor, ingresa la carrera del estudiante: ", (carrera) => {

          // Usamos una expresión regular para verificar que solo contenga letras y espacios
        if (/^[a-zA-Z\s]+$/.test(carrera)) {
            datosEstudiante.carrera = carrera;
            preguntarEdad(); // Llamamos a la siguiente función
        } else {
            console.log("El nombre de la carrera solo debe contener letras y espacios. Inténtalo de nuevo.");
            preguntarCarrera();        
        }

        
    });
};

//Función para preguntar la nota del examen Examen =20% 
const preguntarNotaExamen = () => {
    rl.question("Por favor, ingresa la nota del examen (entre 0 y 10): ", (examen) => {
        examen = parseInt(examen, 10);
        // Validamos si la nota está fuera del rango permitido
        if (examen < 0 || examen > 10) {
            console.log("Nota inválida. Debe estar entre 0 y 10.");
            // Volvemos a llamar a la misma función para pedir la nota de nuevo
            preguntarNotaExamen();
        } else {
            datosEstudiante.examen = examen * 0.20;
            preguntarNotaTareas(); // Llamamos a la siguiente función
        }
    });
};

//Función para preguntar la nota de las tareas tareas = 40%   
const preguntarNotaTareas=()=>{
    rl.question("Por favor, ingresa la nota de las tareas: ", (tareas) => {
        tareas=parseInt(tareas,10);
        if(tareas<0 || tareas>10){
            console.log("Nota inválida. Debe estar entre 0 y 10.");
            preguntarNotaTareas()
        }else{
        datosEstudiante.tareas = parseInt(tareas, 10)* 0.40;
        preguntarNotaAsistencias(); // Llamamos a la función que mostrará los datos
        } 
    });
}

//Función para preguntar la nota de las asistencias asistencia 10%
const preguntarNotaAsistencias=()=>{
    rl.question("Por favor, ingresa la nota de la Asistencia: ", (asistencia) => {

        asistencia=parseInt(asistencia,10);

        if(asistencia<0 || asistencia>10){
            console.log("Nota inválida. Debe estar entre 0 y 10.");
            preguntarNotaAsistencias()
        }else{
        datosEstudiante.asistencia = parseInt(asistencia, 10)* 0.10;
        preguntarNotaInvestigacion(); // Llamamos a la función que mostrará los datos
    }
    });
}


//Función para preguntar la nota de las investigaciones investigación 30%
const preguntarNotaInvestigacion=()=>{
    rl.question("Por favor, ingresa la nota de la Investigacion: ", (investigacion) => {
        investigacion=parseInt(investigacion,10);
        if(investigacion<0 || investigacion>10){
            console.log("Nota inválida. Debe estar entre 0 y 10.");
            preguntarNotaInvestigacion()
        }else{
        datosEstudiante.investigacion = parseInt(investigacion, 10)* 0.30;
        mostrarDatos(); // Llamamos a la función que mostrará los datos
        }
    });
}

// Función para mostrar los datos del estudiante
const mostrarDatos = () => {
    console.log("");
    console.log("-----------------DATOS DEL ESTUDIANTE--------------------------");
    console.log(`Nombre: ${datosEstudiante.nombre}`);
    console.log(`Edad: ${datosEstudiante.edad}`);
    console.log(`Carrera: ${datosEstudiante.carrera}`);
    let notafinal= datosEstudiante.examen + datosEstudiante.asistencia +datosEstudiante.tareas +datosEstudiante.investigacion;
    console.log(`Nota final:`+notafinal);

    rl.close(); // Cerramos la interfaz de readline
};

// Iniciamos llamando a esta funcion
preguntarNombre();
