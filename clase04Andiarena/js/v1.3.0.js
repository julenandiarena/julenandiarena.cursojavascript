function profesional(){
let profesional = parseInt(prompt("Por favor ingrese su número de DNI"));
while(profesional != null && profesional != ""){
    switch (profesional){
        case 14393827:
            alert("Bienvenido Juan Perez");
            break
        case 13764831:
            alert("Bienvenida Maria Lopez");
            break
        default:
            alert("DNI no ingresado, por favor comunicarse a registros@casl.com.ar para completar el registro");
            break
        }
        break
    }
}

function historiaclinica(){
    let paciente = prompt("Ingrese nombre del paciente");
    console.log(paciente)
    let datoshc = " ";
    while(datoshc != "esc"){
        datoshc = prompt("Ingrese datos de la historia clínica del paciente. Pulse 'esc' para terminar.");
        console.log(datoshc);
    }alert("Historia clínica de " + paciente + " ingresada o actualizada. Para finalizar cierre la pestaña.")
}

profesional();
historiaclinica();
