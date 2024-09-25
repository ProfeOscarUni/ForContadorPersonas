var edad, estadoCivil, estatura, sexo, 
contadorPersonas=0, acumuladorEdad=0, acumuladorEstatura=0, 
promedioEdad=0, promedioEstatura=0, porcentajeCondicion=0, cantidadPersonas=2;

for (let numeroPersona = 1; numeroPersona <= cantidadPersonas; numeroPersona++) {
    edad = parseFloat(prompt("Ingrese la edad de la persona número " +numeroPersona));
    estadoCivil = parseFloat(prompt("Ingrese el estado civil de la persona número " +numeroPersona + " 1. Soltero   2.Casado"));
    estatura = parseFloat(prompt("Ingrese la estatura de la persona número " +numeroPersona  +" en cm"));
    sexo = parseFloat(prompt("Ingrese el sexo de la persona número " +numeroPersona + " 1. Hombre   2.Mujer"));
    if ((edad>=18)&&(estadoCivil==1)&&(estatura>170)&&(sexo==1)) {
        contadorPersonas=contadorPersonas+1;
        acumuladorEdad = acumuladorEdad + edad;
        acumuladorEstatura = acumuladorEstatura + estatura;
    }
    
}
promedioEdad = acumuladorEdad/contadorPersonas;
promedioEstatura =acumuladorEstatura/contadorPersonas;
porcentajeCondicion = (contadorPersonas/ cantidadPersonas)*100;

alert("El  promedio de edades de las personas con condiciones dadas es de : "+promedioEdad);
alert("El  promedio de estaturas de las personas con condiciones dadas es de : "+promedioEstatura);
alert("El porcentaje de personas que cumplen con las condiciones dadas es: " +porcentajeCondicion)
