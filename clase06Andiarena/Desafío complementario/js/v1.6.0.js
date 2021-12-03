class Paciente{
    constructor(name, surname, age, diagnosis) {
    this.name = name;
    this.surname = surname;
    this.age = parseInt(age);
    this.diagnosis = diagnosis;
    }
}

const arrayPacientes = [];
do{
    var entradaNombre = prompt("Ingrese el nombre del paciente o 'esc' para terminar.");
    if (entradaNombre === "esc" || entradaNombre === "ESC" || entradaNombre === "Esc"){
        break;   
    }else{
        nombreP = entradaNombre;
        var apellidoP = prompt("Ingrese apellido del paciente:");
        var edadP = prompt("Ingrese edad del paciente:");
        var diagnosticoP = prompt("Ingrese siglas o código del diagnóstico del paciente:");
        arrayPacientes.push(new Paciente(nombreP, apellidoP, edadP, diagnosticoP));
    }
} 
while (entradaNombre != "esc" || entradaNombre != "ESC" || entradaNombre != "Esc")
console.log(arrayPacientes);

for (var paciente of arrayPacientes){
    document.write("<ul><li><h3>Nombre: " + paciente.name+ "</h3></li>");
    document.write("<ul><li><h3>Apellido: " + paciente.surname + "</h3></li>");
    document.write("<ul><li><h3>Edad: " + paciente.age + "</h3></li>");
    document.write("<ul><li><h3>Diagnóstico: " + paciente.diagnosis + "</h3></li>");
}

var ordenadosEdad = [];
ordenadosEdad = arrayPacientes.map(age => age);
var ordenadosEdad = arrayPacientes;
ordenadosEdad.sort(function(a, b){
    return a.age - b.age;
});
console.log("Ordenados por Edad de menor a mayor:");
console.log(ordenadosEdad);
document.write("<h3> Lista de Pacientes ordenados por edad de menor a mayor: </h3>");

