/* En esta ocasión, mejorando lo pensado para el desafío anterior, se le solicita al usuario ingresar apellido y nombre para poder acceder a la web. 
Si su apellido y nombre son true se le habilita el acceso.
*/
let message;
let name = prompt("Por favor ingrese su nombre y apellido");
if ((name == null) || (name == "")){
    message = "Has cancelado o introducido el nombre vacío. Por favor, intente nuevamente.";
}else if ((name === "Juan Perez") || (name === "juan perez")){
    message = "Hola, Juan Perez, bienvenido a la web de C.A.S.L.";
}else if ((name != "Juan Perez") || (name != "juan perez")){
    message = "Usuario no registrado en la web de C.A.S.L. Por favor comuníquese a ingresos@casl.com.ar";
}
alert(message);
console.log(name)