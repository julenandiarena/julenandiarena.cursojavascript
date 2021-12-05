//COSAS A AGREGAR O CORREGIR PARA LA PRIMERA ENTREGA DEL PROYECTO FINAL
//Función profesional, hacerla array de objeto donde se guarden los admitidos.
//*) entradaNombre === "esc" || entradaNombre === "ESC" || entradaNombre === "Esc"... resolver usando el metodo de string, toLowerCase().
//ordenadosEdad = arrayPacientes; aca podrias haber usado spread operetor:[...arraypacientes].
//Que ordene les pacientes por apellido en orden alfábetico, no por edad.

const registeredProfessionals = [
    {name: "Juan Pérez", numberID: "12345678"}, 
    {name: "María López", numberID: "87654321"},
    {name: "Susana Suárez", numberID: "11111111"}
]
function entryProfessionals(){
    let entryProfessionals = prompt("Por favor ingrese su número de DNI");
while(entryProfessionals != null && entryProfessionals != ""){
    switch (registeredProfessionals){
        case "12345678":
            alert(`Bienvenido a la web de CASL: Lic. ${name}. Pulse 'Aceptar' para continuar.`);
            break
        case "87654321":
            alert("Bienvenida a la web de CASL: Lic. María López. Pulse 'Aceptar' para continuar.");
               break
        case "11111111":
            alert("Bienvenida a la web de CASL: Lic. Susana Suárez. Pulse 'Aceptar' para continuar.");
            break
        default:
            alert("DNI no ingresado o inválido. Acceso denegado, por favor comunicarse a registros@casl.com.ar para completar el registro.");
            continue
        }
        break
    }
}


class Paciente{
    constructor(passport, name, surname, age, adress, meds, medsNumber, diagnosis, clinicHistory) {
    this.passport = passport;
    this.name = name;
    this.surname = surname;
    this.age = parseInt(age);
    this.adress = adress;
    this.meds = meds;
    this.medsNumber = medsNumber;
    this.diagnosis = diagnosis;
    this.clinicHistory = clinicHistory;
    }
}

const arrayPacientes = [];
do{
    let entradaDNI = prompt("Ingrese el número de DNI del paciente para nuevo registro o pulse 'esc' para terminar.");
    if (entradaDNI.toLowerCase() === "esc"){
        break;   
    }else{
        dniP = entradaDNI;
        let nombrePac = prompt("Ingrese nombre del paciente:");
        let apellidoPac = prompt("Ingrese apellido del paciente:");
        let edadPac = prompt("Ingrese edad del paciente:");
        let direccionPac= prompt("Ingrese dirección del paciente:");
        let obraSocialPac  = prompt("Ingrese obra social del paciente:");
        let obraSocialNumeroPac = prompt("Ingrese n° de afiliadx del paciente:");
        let diagnosticoPac= prompt("Ingrese sigla o código del diagnóstico del paciente:");
        let historiaClinicaPac = prompt("Ingrese historia clínica del paciente:");
        arrayPacientes.push(new Paciente(dniPac, nombrePac, apellidoPac, edadPac, direccionPac, obraSocialPac, obraSocialNumeroPac, diagnosticoPac, historiaClinicaPac));
    }
} 
while (entradaDNI != "esc")
console.log(arrayPacientes);

for (let paciente of arrayPacientes){
    document.write("<ul><li><h3>DNI: " + paciente.passport + "</h3></li>");
    document.write("<ul><li><h3>Nombre: " + paciente.name + "</h3></li>");
    document.write("<ul><li><h3>Apellido: " + paciente.surname + "</h3></li>");
    document.write("<ul><li><h3>Edad: " + paciente.age + "</h3></li>");
    document.write("<ul><li><h3>Dirección: " + paciente.adress + "</h3></li>");
    document.write("<ul><li><h3>Obra Social: " + paciente.meds + "</h3></li>");
    document.write("<ul><li><h3>N° de afiliadx: " + paciente.medsNumber + "</h3></li>");
    document.write("<ul><li><h3>Sigla o código del diagnóstico: " + paciente.diagnosis + "</h3></li>");
    document.write("<ul><li><h3>Historia clínica: " + paciente.clinicHistory + "</h3></li>");
}
console.log(paciente.passport);
console.log(paciente.name);
console.log(paciente.surname);
console.log(paciente.age);
console.log(paciente.adress);
console.log(paciente.meds);
console.log(paciente.medsNumber);
console.log(paciente.diagnosis);
console.log(paciente.clinicHistory);

let ordenarApellidos = [];
ordenarApellidos = arrayPacientes.map(surname => surname);
ordenarApellidos = arrayPacientes;
ordenarApellidos.sort(function(a, b){return (a.type < b.type) ? -1 : 1})
console.log("Ordenados por Apellido en orden alfabético:");
console.log(ordenarApellidos);
document.write("<h3> Lista de Pacientes ordenados alfabéticamente por apellido: </h3>");

