//triangulo if-else 
//realizar un programa que determine si un triangulo es equilatero, isoseles o escaleno, segun las logitudes de sus lados

let N1 = 3;
let N2 = 6;
let N3 = 9;

if (N1 === N2 || N2 === N3) {
    console.log("El triángulo es equilátero");
} else if (N1 === N2 || N2 === N3 || N1 === N3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}



