//alumnos calificacion
//realizar un programa que muestres una letra segun la calificacion de un alumno

let calificacion = 70;

switch (true) {
    case (calificacion >= 90 || calificacion <= 100):
        console.log("A");
        break;
    case (calificacion >= 80 || calificacion <= 89):
        console.log("B");
        break;
    case (calificacion >= 70 || calificacion <= 79):
        console.log("C");
        break;
    case (calificacion >= 60 || calificacion <= 69):
        console.log("D");
        break;
    case (calificacion >= 0 || calificacion <= 59):
        console.log("F");
        break;
}
