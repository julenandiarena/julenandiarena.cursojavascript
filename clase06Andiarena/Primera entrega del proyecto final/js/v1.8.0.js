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
document.write("<h3> Listado de Nuevos Ingresos ordenados por edad de menor a mayor: </h3>");
 
for (let paciente of arrayPatients){
    document.write(`<li>DNI: ${paciente.passport}</li>`);
    document.write(`<li>Nombre: ${paciente.name}</li>`);
    document.write(`<li>Apellido: ${paciente.surname}</li>`);
    document.write(`<li>Edad: ${paciente.age}</li>`);
    document.write(`<li>Dirección: ${paciente.adress}</li>`);
    document.write(`<li>Obra Social: ${paciente.meds}</li>`);
    document.write(`<li>N° de afiliado/a/e: ${paciente.medsNumber}</li>`);
    document.write(`<li>Sigla o código del diagnóstico: ${paciente.diagnosis}</li>`);
    document.write(`<li>Historia clínica: ${paciente.clinicHistory}</li>`);
    document.write("</br>");
}



