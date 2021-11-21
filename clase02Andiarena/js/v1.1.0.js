/* En esta ocasión, mejorando lo pensado para el desafío anterior, se le solicita al usuario ingresar apellido y nombre para poder acceder a la web. 
Si su apellido y nombre son true -en el caso hipotético de estar previamente registrados en una base de datos- se le habilita el acceso.
*/
let message;
let fullname = prompt("Por favor ingrese su nombre y apellido");
if ((fullname == null) || (fullname == "")) {
    message = "Has cancelado o introducido el nombre vacío. Por favor, intente nuevamente.";
} else ((fullname == "Juan Perez") || (fullname == "juan perez"));{
    message = "Hola Juan Perez bienvenido a la web de C.A.S.L.";
}
alert(message);