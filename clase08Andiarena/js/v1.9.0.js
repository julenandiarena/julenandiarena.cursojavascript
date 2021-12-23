/**
 * @challenge: Interactuar con HTML
 * 
 * @version: 1.9.0
 * @author: Julen Tavo Andiarena Lattes
 * @fecha: 16/12/2021
 *
 * History:
 *  - v1.9.0 – Primera entrega (Aprobada)
 */
 
const registeredProfessionals = [
    {name: "Juan Pérez", numberID: "12345678"},
    {name: "María López", numberID: "11111111"},
    {name: "Susana Suárez", numberID: "22222222"}
]
 
let getAccess = true;
 
do{
    let enterUser = prompt("Bienvenido/a al área de nuevos ingresos de CASL. Por favor, escriba su número de documento:"); //Ver tema logueo
    registeredProfessionals.forEach(element => {
        if(element.numberID == enterUser){
            getAccess = false
        }
    });
}while(getAccess)
 
class Patient{
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
 
const arrayPatients = [];
do{
    var enterID = prompt("Ingrese el número de DNI del paciente para nuevo registro o pulse 'ok' para terminar.");
    if (enterID === "ok"){
        break;  
    }else{
        idP = enterID;
        let nameP = prompt("Ingrese nombre del paciente:");
        let surnameP = prompt("Ingrese apellido del paciente:");
        let ageP = parseInt(prompt("Ingrese edad del paciente:"));
        let adressP= prompt("Ingrese dirección del paciente:");
        let medsP  = prompt("Ingrese obra social del paciente:");
        let numberMedsP = prompt("Ingrese n° de afiliado/a/e del paciente:");
        let diagnosisP= prompt("Ingrese sigla o código del diagnóstico del paciente:");
        let clinichistoryP = prompt("Ingrese historia clínica del paciente:");
        arrayPatients.push(new Patient(idP, nameP, surnameP, ageP, adressP, medsP, numberMedsP, diagnosisP, clinichistoryP));
    }
}
while (enterID != "ok")
console.log(arrayPatients);
 
let sortedByAge = [];
 
sortedByAge = arrayPatients.map(age => age);
sortedByAge = arrayPatients;
sortedByAge.sort(function(a, b){
    return a.age - b.age;
});


console.log("Ordenados por Edad de menor a mayor:");
console.log(sortedByAge);

for (let paciente of arrayPatients){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h4>DNI: ${paciente.passport}</h4>
    <p>Nombre: ${paciente.name}</p>
    <p>Apellido: ${paciente.surname}</p>
    <p>Edad: ${paciente.age}</p>
    <p>Dirección: ${paciente.adress}</p>
    <p>Obra Social: ${paciente.meds}</p>
    <p>N° de afiliado/a/e: ${paciente.medsNumber}</p>
    <p>Sigla o código del diagnóstico: ${paciente.diagnosis}</p>
    <p>Historia clínica: ${paciente.clinicHistory}</p>`
    document.body.appendChild(contenedor);
}