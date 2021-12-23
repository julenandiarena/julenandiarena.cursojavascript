/**
 * @challenge: Segunda entrega del Proyecto Final
 * @version: 1.11.0
 * @author: Julen Tavo Andiarena Lattes
 * @fecha: 28/12/2021
 *
 * History:
 *  - v1.11.0 – Primera entrega
 */


//Crear array de objetos de los profesionales registrados
const registeredProfessionals = [
    {name: "Juan Pérez", numberID: "12345678"},
    {name: "María López", numberID: "11111111"},
    {name: "Susana Suárez", numberID: "22222222"}
]

//Dar acceso sólo a quienes pertenecen al array de objetos anterior
let getAccess = true;
 
do{
    let enterUser = prompt("Bienvenido/a al área de nuevos ingresos de CASL. Por favor, escriba su número de documento:"); //Este prompt hay que sacarlo
    registeredProfessionals.forEach(element => {
        if(element.numberID == enterUser){
            getAccess = false
            
        }
    });
}while(getAccess) 

//Crear la clase constructora de unx paciente
class Paciente{
    constructor(passport, name, surname, age, adress, meds, medsNumber, diagnosis, clinicHistory){
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

//Definir variables globales para trabajar con el DOM
let arrayPacientes = [];
let miFormulario = document.querySelector("#formulario"); 
let inputDNI = document.querySelector("#iDNI"); 

let dniP = miFormulario.children.value; 
let nombreP = miFormulario.children.value; 
let apellidoP = miFormulario.children.value; 
let edadP = miFormulario.children.value; 
let direccionP = miFormulario.children.value; 
let obraSocialP = miFormulario.children.value; 
let numeroObraSocialP = miFormulario.children.value;
let diagnosticoP = miFormulario.children.value; 
let historiaClinicaP = miFormulario.children.value; 

let contenedor = document.querySelector("#pacienteIngresadx");
let displayTodxs = document.querySelector("#displayTodxs"); 
let parrafos = displayTodxs.getElementsByTagName("p"); 
let bandera = false;

//Definir eventos de los botones
miFormulario.addEventListener("submit", agregarPacientes); 
btnMostrar.addEventListener("click", MostrarTodxsPacientes); 

inputDNI.focus(); 

//Crear funciones
function comprobacion(){
    for(let i = 0; i <= miFormulario.children.length; i++){
        console.log(miFormulario.children[i])
        console.log(typeof miFormulario.children[i].value) 
        
        if(typeof miFormulario.children[i].value == "string" && miFormulario.children[i].value == ""){
            console.log("alerta input vacio!")
            }
            console.log(miFormulario.children[i].tagName == "INPUT")
         }

}

function validarForm(){ 
    dniP = miFormulario.children.value;
    nombreP = miFormulario.children.value;
    apellidoP = miFormulario.children.value;
    edadP = miFormulario.children.value;
    direccionP = miFormulario.children.value;
    obraSocialP = miFormulario.children.value;
    numeroObraSocialP = miFormulario.children.value;
    diagnosticoP = miFormulario.children.value;
    historiaClinicaP = miFormulario.children.value;
    console.log(dniP);
    console.log(nombreP);
    console.log(apellidoP);
    console.log(edadP);
    console.log(direccionP);
    console.log(obraSocialP); 
    console.log(numeroObraSocialP);
    console.log(diagnosticoP);
    console.log(historiaClinicaP); 
    if(dniP == "" || nombreP == "" || apellidoP == "" || edadP == "" || direccionP == "" || obraSocialP == "" || numeroObraSocialP == "" || diagnosticoP == "" || historiaClinicaP == "" ){
        alert("ERROR"); //Este alert hay que sacarlo
        inputDNI.focus();
        bandera = false;
    }else{
        bandera = true; 
    }
}

//Función para agregar pacientes al array de pacientes
function agregarPacientes(e){ 
    e.preventDefault(); 
    validarForm(); 
    if (bandera == true){
        let opcion = confirm("¿Está segurx que desea agregar al Paciente?");
        if (opcion == true){ 
            let formulario = e.target 
            arrayPacientes.push(new Paciente(dniP, nombreP, apellidoP, edadP, direccionP, obraSocialP, numeroObraSocialP, diagnosticoP, historiaClinicaP)); 
        }else{ 
            alert("No se agregará al paciente"); //Este alert hay que sacarlo
        } 
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        miFormulario.children.value = "";
        contenedor.innerHTML = "";
        AgregarAlDom(); 
        inputDNI.focus(); 
    }else{
        inputDNI.focus();
    }
}


//funcion para mostrar en DOM el últimx paciente ingresadx
function AgregarAlDom(){ 
    contenedor.innerHTML = `<h3> Últimx paciente ingresadx:</h3>
    <p><strong> DNI: </strong> ${dniP}</p>
    <p><strong> Nombre: </strong> ${nombreP}</p>
    <p><strong> Apellido: </strong> ${apellidoP}</p>
    <p><strong> Edad: </strong> ${edadP}</p>
    <p><strong> Dirección: </strong> ${direccionP}</p>
    <p><strong> Obra Social: </strong> ${obraSocialP}</p>
    <p><strong> N° de afiliadx de Obra Social: </strong> ${numeroObraSocialP}</p>
    <p><strong> Diagnóstico: </strong> ${diagnosticoP}</p>
    <p><strong> Historia clínica: </strong> ${historiaClinicaP}</p>
    <hr>`; 
} 

// Función para mostrar proceduralmente todos lxs pacientes en un div en DOM

function MostrarTodxsPacientes(e){ 
    e.preventDefault(); 
    let i = 0; 
    displayTodxs.innerHTML = "<h3> Listado de todxs lxs pacientes:</h3>"; 
    for (const paciente of arrayPacientes){
        let contenedor = document.createElement("div");
        displayTodxs.innerHTML += `<h4>DNI: ${paciente.passport}</h4>
        <p>Nombre: ${paciente.name}</p>
        <p>Apellido: ${paciente.surname}</p>
        <p>Edad: ${paciente.age}</p>
        <p>Dirección: ${paciente.adress}</p>
        <p>Obra Social: ${paciente.meds}</p>
        <p>N° de afiliadx: ${paciente.medsNumber}</p>
        <p>Sigla o código del diagnóstico: ${paciente.diagnosis}</p>
        <p>Historia clínica: ${paciente.clinicHistory}</p>`
        document.body.appendChild(contenedor);
    }
}

//Hay que parsear los datos de los pacientes a JSON y guardarlos en el LocalStorage