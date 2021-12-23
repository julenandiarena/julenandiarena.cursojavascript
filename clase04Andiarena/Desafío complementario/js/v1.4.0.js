/**
 * @challenge: Funciones relacionadas
 * 
 * @version: 1.4.0
 * @author: Julen Tavo Andiarena Lattes
 * @fecha: 27/11/2021
 *
 * History:
 *  - v1.4.0 – Primera entrega (Aprobada)
 */

const multiplicar = (a, b) => a * b;
const restar = (a, b) => a - b;
const descontar = (a, b) => multiplicar(a, b) / 100;


let valorAuto = parseFloat(prompt("Ingrese el valor de su auto para calcular el valor individual y anual de las patentes. Al valor anual le restaremos el descuento del 15%."));

const valorPatentesIndividual = multiplicar(valorAuto, 0.03);
const valorPatentesAnual = multiplicar(valorPatentesIndividual, 12);
const descuento = descontar(valorPatentesAnual, 15);
const valorAnualConDescuento = restar(valorPatentesAnual, descuento)


alert("El valor individual de las patentes de su auto es $" + valorPatentesIndividual + ". El valor anual total es de $" + valorPatentesAnual + ", pero con el descuento le queda en $" + valorAnualConDescuento + ".");