/**
 * @challenge: Incorporar objetos
 * 
 * @version: 1.5.0
 * @author: Julen Tavo Andiarena Lattes
 * @fecha: 2/1/22021
 *
 * History:
 *  - v1.5.0 – Primera entrega (Aprobada)
 */

function profesional(){
    let profesional = parseInt(prompt("Por favor ingrese su número de DNI"));
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

function Paciente(name, surname, age, passport, adress, meds, medsNumber, diagnosis, clinicHistory) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.passport = passport;
     this.adress = adress;
    this.meds = meds;
    this.medsNumber = medsNumber;
    this.diagnosis = diagnosis;
    this.clinicHistory = clinicHistory;
    }
    
const name = prompt("Ingrese NOMBRE del paciente:");
const surname = prompt("Ingrese APELLIDO del paciente:");
const age = parseInt(prompt("Ingrese EDAD del paciente:"));
const passport = parseInt(prompt("Ingrese NÚMERO DE DNI del paciente:"));
const adress = prompt("Ingrese DOMICILIO del paciente:");
const meds = prompt("Ingrese OBRA SOCIAL del paciente:");
const medsNumber = prompt("Ingrese NÚMERO DE OBRA SOCIAL del paciente:");
const diagnosis = prompt("Ingrese DIAGNÓSTICO del paciente:");
const clinicHistory = prompt("Ingrese HISTORIA CLÍNICA del paciente:");

let paciente1 = new Paciente (name, surname, age, passport, adress, meds, medsNumber, diagnosis, clinicHistory);

console.log("name" in paciente1);
console.log("surname" in paciente1);
console.log("age" in paciente1);
console.log("passport" in paciente1);
console.log("adress" in paciente1);
console.log("meds" in paciente1);
console.log("medsNumber" in paciente1);
console.log("diagnosis" in paciente1);
console.log("clinicHistory" in paciente1);
console.log(paciente1);

document.getElementById("name").innerHTML = paciente1.name;
document.getElementById("surname").innerHTML = paciente1.surname;
document.getElementById("age").innerHTML =  paciente1.age;
document.getElementById("passport").innerHTML =  paciente1.passport;
document.getElementById("adress").innerHTML = paciente1.adress;
document.getElementById("meds").innerHTML = paciente1.meds;
document.getElementById("medsNumber").innerHTML =  paciente1.medsNumber;
document.getElementById("diagnosis").innerHTML =  paciente1.diagnosis;
document.getElementById("clinicHistory").innerHTML =  paciente1.clinicHistory;
