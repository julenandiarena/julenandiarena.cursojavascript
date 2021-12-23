/**
 * @challenge: Crear un algoritmo utilizando un ciclo
 * 
 * @version: 1.2.0
 * @author: Julen Tavo Andiarena Lattes
 * @fecha: 24/11/2021
 *
 * History:
 *  - v1.2.0 – Primera entrega (Aprobada)
 */
 
let profesional = prompt("Por favor ingrese su nombre y apellido");
while(profesional != "esc"){
    switch (profesional){
        case "Juan Perez":
            alert("Bienvenido Juan Perez");
            break;
        case "Maria Lopez":
            alert("Bienvenida Maria Lopez");
            break;
        default:
            alert("Profesional no ingresado/a, por favor comunicarse a registros@casl.com.ar");
            break;
        }
        let paciente = prompt("Ingrese datos de la historia clínica del paciente");
        let historiaclinica = paciente;
        let masdatoshc = " ";
            while(masdatoshc != "esc"){
                masdatoshc = prompt("Ingrese más datos de la historia clínica");
                historiaclinica = historiaclinica + " " + masdatoshc;
                console.log(historiaclinica);
            }alert("Historia clínica ingresada o actualizada. Para repetir pulse 'Aceptar'. Para finalizar cierre la pestaña.")
    
    }
