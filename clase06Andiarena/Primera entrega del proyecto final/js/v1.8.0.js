//COSAS A AGREGAR O CORREGIR PARA LA PRIMERA ENTREGA DEL PROYECTO FINAL:
//TRES: ordenadosEdad = arrayPacientes; aca podrias haber usado spread operetor:[...arraypacientes].
//CUATRO: Que ordene les pacientes por apellido en orden alfábetico, no por edad.

const registeredProfessionals = [
    {name: "Juan Pérez", numberID: "12345678"},
    {name: "María López", numberID: "87654321"},
    {name: "Susana Suárez", numberID: "11111111"}
] 
//Array de objetos donde se guardan los usuarios admitidos para el ingreso.

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

let leDamosAcceso = true;

do{
    let enterUser = prompt("Bienvenido/a al área de nuevos ingresos de CASL. Por favor, escriba su número de documento:"); //Ver tema logueo
    registeredProfessionals.forEach(element => {
        if(element.numberID == enterUser){
            leDamosAcceso = false
        }
    });
}while(leDamosAcceso)

/*
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
*/

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
    var entradaDNI = prompt("Ingrese el número de DNI del paciente para nuevo registro o pulse 'ok' para terminar.");
    if (entradaDNI === "ok" || entradaDNI === "OK" || entradaDNI === "Ok"){
        break;   
    }else{
        dniP = entradaDNI;
        let nombreP = prompt("Ingrese nombre del paciente:");
        let apellidoP = prompt("Ingrese apellido del paciente:");
        let edadP = parseInt(prompt("Ingrese edad del paciente:"));
        let direccionP= prompt("Ingrese dirección del paciente:");
        let obraSocialP  = prompt("Ingrese obra social del paciente:");
        let obraSocialNumeroP = prompt("Ingrese n° de afiliadx del paciente:");
        let diagnosticoP= prompt("Ingrese sigla o código del diagnóstico del paciente:");
        let historiaClinicaP = prompt("Ingrese historia clínica del paciente:");
        arrayPacientes.push(new Paciente(dniP, nombreP, apellidoP, edadP, direccionP, obraSocialP, obraSocialNumeroP, diagnosticoP, historiaClinicaP));
    }
} 
while (entradaDNI != "ok" || entradaDNI != "OK" || entradaDNI != "Ok")
console.log(arrayPacientes);

let ordenadosEdad = [];
ordenadosEdad = arrayPacientes.map(age => age);
ordenadosEdad = arrayPacientes;
ordenadosEdad.sort(function(a, b){
    return a.age - b.age;
});
console.log("Ordenados por Edad de menor a mayor:");
console.log(ordenadosEdad);
document.write("<h3> Lista de Pacientes ordenados por edad de menor a mayor: </h3>");

for (let paciente of arrayPacientes){
    document.write(`<li>Edad: ${paciente.age}</li>`);
    document.write(`<li>DNI: ${paciente.passport}</li>`);
    document.write(`<li>Nombre: ${paciente.name}</li>`);
    document.write(`<li>Apellido: ${paciente.surname}</li>`);
    document.write(`<li>Dirección: ${paciente.adress}</li>`);
    document.write(`<li>Obra Social: ${paciente.meds}</li>`);
    document.write(`<li>N° de afiliadx: ${paciente.medsNumber}</li>`);
    document.write(`<li>Sigla o código del diagnóstico: ${paciente.diagnosis}</li>`);
    document.write(`<li>Historia clínica: ${paciente.clinicHistory}</li>`);
    document.write("</br>");
}



