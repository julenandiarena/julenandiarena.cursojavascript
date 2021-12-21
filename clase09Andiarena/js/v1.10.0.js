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


//Crear la clase paciente
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

let dniP = miFormulario.children[1].value;
let nombreP = miFormulario.children[3].value;
let apellidoP = miFormulario.children[5].value;
let edadP = miFormulario.children[7].value;
let direccionP = miFormulario.children[9].value;
let obraSocialP = miFormulario.children[11].value;
let numeroObraSocialP = miFormulario.children[13].value;
let diagnosticoP = miFormulario.children[15].value;
let historiaClinicaP = miFormulario.children[17].value;

let contenedor = document.querySelector("#pacienteIngresadx")
let displayTodxs = document.querySelector("#displayTodxs");
let parrafos = displayTodxs.getElementsByTagName("p");
let bandera = false;

//Definir eventos de los botones
miFormulario.addEventListener("submit", agregarPacientes);
btnMostrar.addEventListener("click", MostrarTodxsPacientes);

inputDNI.focus();

//Funciones
function validarForm(){ 
    dniP = miFormulario.children[1].value;
    nombreP = miFormulario.children[3].value;
    apellidoP = miFormulario.children[5].value;
    edadP = miFormulario.children[7].value;
    direccionP = miFormulario.children[9].value;
    obraSocialP = miFormulario.children[11].value;
    numeroObraSocialP = miFormulario.children[13].value;
    diagnosticoP = miFormulario.children[15].value;
    historiaClinicaP = miFormulario.children[17].value;
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
        alert("ERROR");
        inputDNI.focus();
        bandera = false;
    }else{
        bandera = true;
    }
   
}

//Función para agregar pacientes al array de Pacientes
function agregarPacientes(e){
    e.preventDefault();
    validarForm();
    if (bandera == true){
        let opcion = confirm("¿Está segurx que desea agregar al Paciente?");
        if (opcion == true){
            let formulario = e.target
            arrayPacientes.push(new Paciente(dniP, nombreP, apellidoP, edadP, direccionP, obraSocialP, numeroObraSocialP, diagnosticoP, historiaClinicaP));
        }else{
            alert("No se agregará al paciente");
        }
        miFormulario.children[1].value = "";
        miFormulario.children[3].value = "";
        miFormulario.children[5].value = "";
        miFormulario.children[7].value = "";
        miFormulario.children[9].value = "";
        miFormulario.children[11].value = "";
        miFormulario.children[13].value = "";
        miFormulario.children[15].value = "";
        miFormulario.children[17].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        inputDNI.focus();
    }else{
        inputDNI.focus();
    }
}

//funcion para mostrar en DOM el ultimo paciente ingresadx
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

// funcion para mostrar proceduralmente todos los alumnos en un div en DOM
function MostrarTodxsPacientes(e){
    e.preventDefault();
    let i = 0;
    displayTodxs.innerHTML = "<h3> Listado de todxs lxs pacientes:</h3>";
    for (const paciente of arrayPacientes){
        displayTodxs.innerHTML += `
        <p><strong> DNI: </strong> ${dniP}</p>
    <p><strong> Nombre: </strong> ${nombreP}</p>
    <p><strong> Apellido: </strong> ${apellidoP}</p>
    <p><strong> DNI: </strong> ${dniP}</p>
    <p><strong> Edad: </strong> ${edadP}</p>
    <p><strong> Dirección: </strong> ${direccionP}</p>
    <p><strong> Obra Social: </strong> ${obraSocialP}</p>
    <p><strong> N° de afiliadx de Obra Social: </strong> ${numeroObraSocialP}</p>
    <p><strong> Diagnóstico: </strong> ${diagnosticoP}</p>
    <p><strong> Historia clínica: </strong> ${historiaClinicaP}</p>
    <hr>`;
    }
}