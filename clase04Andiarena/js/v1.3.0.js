function historiaclinica(){
    let paciente = prompt("Ingrese datos de la historia clínica del paciente");
    let hc = paciente;
    let masdatoshc = " ";
    while(masdatoshc != "esc"){
        masdatoshc = prompt("Ingrese más datos de la historia clínica");
        hc = hc + " " + masdatoshc;
        console.log(hc);
    }alert("Historia clínica ingresada o actualizada. Para repetir pulse 'Aceptar'. Para finalizar cierre la pestaña.")
}

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

historiaclinica();
