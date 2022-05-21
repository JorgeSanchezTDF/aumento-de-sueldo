/*
Aumento de sueldo

Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se realiza de la siguiente manera:
| sueldo actual   | sueldo con aumento |
| -------------------------------------|
| 0 - 15000 $     |  20%               | 
| 15001 - 20000 $ |  10%               |
| 20001 - 25000 $ |  5%                |
| mas de 25000 $  |  0%                |  
----------------------------------------
Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre.
*/

let salarioActual: number = Number(prompt("Ingrese el salario actual"));

if (salarioActual <= 15000) {
  console.log("El aumento es 20%");
  console.log("El sueldo con aumento es: " + salarioActual * 1.2);
} else if (salarioActual > 15000 && salarioActual <= 20000) {
  console.log("El aumento es 10%");
  console.log("El sueldo con aumento es: " + salarioActual * 1.1);
} else if (salarioActual > 20000 && salarioActual <= 25000) {
  console.log("El aumento es 5%");
  console.log("El sueldo con aumento es: " + salarioActual * 1.05);
} else {
  console.log("El aumento es 0%");
  console.log("El sueldo queda igual " + salarioActual);
}
