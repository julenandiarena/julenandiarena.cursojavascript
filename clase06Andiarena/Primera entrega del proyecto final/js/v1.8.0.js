//COSAS A AGREGAR O CORREGIR PARA LA PRIMERA ENTREGA DEL PROYECTO FINAL:
//UNO: Función profesional, hacerla array de objeto donde se guarden los admitidos.
//DOS: *) entradaNombre === "esc" || entradaNombre === "ESC" || entradaNombre === "Esc"... resolver usando el metodo de string, toLowerCase().
//TRES: ordenadosEdad = arrayPacientes; aca podrias haber usado spread operetor:[...arraypacientes].
//CUATRO: Que ordene les pacientes por apellido en orden alfábetico, no por edad.

const registeredProfessionals = [
    {name: "Juan Pérez", numberID: "12345678"},
    {name: "María López", numberID: "87654321"},
    {name: "Susana Suárez", numberID: "11111111"}
] //Array de objetos donde se guardan los usuarios admitidos para el ingreso.

let iterador = function(elementos){ //Esta es una función creadora de un objeto iterable
    this.elementos = elementos; //Elemento a iterar
    this.index = 0;
}

iterador.prototype = { //Se accede al objeto creado anteriormente y con -prototype- se le agregan funciones, como el método de clases.
    hayOtroElemento: function(){
        return this.index < this.elementos.length; //Booleano para saber su hay algo más en el elemento a recorrer. -Si lo hay es true, sino es false-
    },//Los métodos se dividen con coma.
    siguiente: function(){
        return this.elementos[this.index++];//Esto va iterando. Este método retorna el elemento siguiente.
    },
    reset: function(){
        return this.index = 0 //Esto resetea al iterador.
    }

}

let paraIterar = new iterador(registeredProfessionals); //Para iterar el array de objetos.

while(paraIterar.hayOtroElemento()){ //Define que si hay otro elemento se ejecuta, corta cuando es false.
    let elemento = paraIterar.siguiente();
    console.log(elemento)//Para ver los elementos
}

let leDamosAcceso = false;
let enterUser = prompt("Ingrese su número de documento"); //Ver tema logueo

do{
    let elemento = paraIterar.siguiente();
    
    for (let valorInternoDelObjeto in elemento)
    {
        console.log(valorInternoDelObjeto) //Esto recorre los objetos y lee sus propiedades pero no sus valores.
        console.log(elemento[valorInternoDelObjeto]) //Lee sus propiedades y muestra los valores.
        
        if(enter == elemento[valorInternoDelObjeto]) //Si tiene coincidencias le da acceso.
        {
            leDamosAcceso = true;
        }
    }

}while(paraIterar.hayOtroElemento())

console.log(leDamosAcceso)

class Paciente{
    constructor(passport, name, surname, age, adress, meds, medsNumber, diagnosis, clinicHistory) {
    this.passport = passport;
    this.name = name;
    this.surname = surname;
    this.age = age;
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
    if (entradaDNI === "esc" || entradaDNI === "ESC" || entradaDNI === "Esc"){
        console.log("escape")
        break;   
    }else{
        dniPac = entradaDNI;
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
while (entradaDNI = String)
console.log(arrayPacientes);

let ordenarApellidos = [...arrayPacientes];
ordenarApellidos = arrayPacientes.map(surname => surname);
ordenarApellidos = arrayPacientes;
ordenarApellidos.sort(function(a, b){return (a.type < b.type) ? -1 : 1})
console.log("Ordenados por Apellido en orden alfabético:");
console.log(ordenarApellidos);
document.write("<h3> Lista de Pacientes ordenados alfabéticamente por apellido: </h3>");

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



