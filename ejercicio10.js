/**Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.

Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */

const turnoMañana = [16, 17, 16, 15, 14]; // Aquí se pueden colocar los valores que se desean
const turnoTarde=[11, 10, 12, 14, 13, 12];
const turnoNoche=[35, 35, 30, 24, 25, 21, 22, 27, 19, 34, 20];

//contadores
let contadorMañana = 0;
let contadorTarde = 0;
let contadorNoche = 0;

//for para el arreglo del turno de la Mañana
for (let i = 0; i < turnoMañana.length; i++) {
    contadorMañana=contadorMañana+turnoMañana[i];
}

//for para el arreglo del turno de la tarde
for (let i = 0; i < turnoTarde.length; i++) {
    contadorTarde=contadorTarde+turnoTarde[i];
}

//for para el arreglo del turno de la noche
for (let i = 0; i < turnoNoche.length; i++) {
    contadorNoche=contadorNoche+turnoNoche[i];
}

let promedioMañana=contadorMañana/turnoMañana.length;
let promedioTarde=contadorTarde/turnoTarde.length;
let promedioNoche=contadorNoche/turnoNoche.length;

//Muestra los promedios
console.log("El promedio de edades del turno de la mañana es: ", promedioMañana);
console.log("El promedio de edades del turno de la tarde es: ", promedioTarde);
console.log("El promedio de edades del turno de la noche es: ", promedioNoche);

//Para saber cual es el turno con el promedio mayor
if(promedioMañana>promedioTarde && promedioMañana>promedioNoche){
    console.log("El turno de la mañana tiene un promedio de edades mayor.");
}else if(promedioTarde>promedioMañana && promedioTarde>promedioNoche){
    console.log("El turno de la tarde tiene un promedio de edades mayor.");
}else{
    console.log("El turno de la noche tiene un promedio de edades mayor.");
}



