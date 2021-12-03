function profesional(){
    let profesional = parseInt(prompt("Por favor ingrese su número de DNI:"));
    while(profesional != null && profesional != ""){
        switch (profesional){
            case 14393827:
                alert("Bienvenido a la web de CASL: Lic. Juan Pérez. Pulse 'Aceptar' para continuar.");
                break
            case 13764831:
                alert("Bienvenida a la web de CASL: Lic. María López. Pulse 'Aceptar' para continuar.");
                break
            default:
                alert("DNI no ingresado o inválido. Acceso denegado, por favor comunicarse a registros@casl.com.ar para completar el registro.");
                continue
            }
            break
        }
    }

profesional();

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
    var entradaDNI = prompt("Ingrese el número de DNI del paciente para nuevo registro o pulse 'esc' para terminar.");
    if (entradaDNI === "esc" || entradaDNI === "ESC" || entradaDNI === "Esc"){
        break;   
    }else{
        dniP = entradaDNI;
        var nombreP = prompt("Ingrese nombre del paciente:");
        var apellidoP = prompt("Ingrese apellido del paciente:");
        var edadP = prompt("Ingrese edad del paciente:");
        var direccionP= prompt("Ingrese dirección del paciente:");
        var obraSocialP  = prompt("Ingrese obra social del paciente:");
        var obraSocialNumeroP = prompt("Ingrese n° de afiliadx del paciente:");
        var diagnosticoP= prompt("Ingrese sigla o código del diagnóstico del paciente:");
        var historiaClinicaP = prompt("Ingrese historia clínica del paciente:");
        arrayPacientes.push(new Paciente(dniP, nombreP, apellidoP, edadP, direccionP, obraSocialP, obraSocialNumeroP, diagnosticoP, historiaClinicaP));
    }
} 
while (entradaDNI != "esc" || entradaDNI != "ESC" || entradaDNI != "Esc")
console.log(arrayPacientes);

for (var paciente of arrayPacientes){
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