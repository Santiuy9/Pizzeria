


let Edad;

do {
  Edad = prompt("Por favor, ingresa un número:");
} while (isNaN(Edad) || Edad === "" || Edad === null);

Edad = Number(Edad);
console.log("Número ingresado:", Edad);


if (Edad >= 18 && Edad <= 65) {
    let acceso = alert(`Bienvenido, tu puedes pasar`)

}
else if (Edad >= 65) {
    acceso = alert(`Sos tremendo octagenario`)
}
else if (Edad >= 100) {
    acceso = alert(`Vos ya estar re muerto`)
}
else if (Edad <= 0) {
    alert(`Vos todavia no naciste`)
}
else {
    acceso = alert(`Eres menor de edad, no puedes entrar`)
}


let Adriel = {
    Nombre: "Adriel",
    Edad : 31,
    Ocupacion: "Empleado"
}
let Santiago = {
    Nombre: "Santiago",
    Edad : 24,
    Ocupacion: "Se la rasca"
}



let Estudiantes = [Adriel, "Santiago", "Martin", "Melisa", "Javier", "Pedro"]


// console.log(Estudiantes[0].Ocupacion)
// console.log(Estudiantes[0].Nombre)

function Presentacion(persona) {
    console.log(`Hola mi nombre es ${persona.Nombre} y tengo ${persona.Edad}`)
}

Presentacion(Adriel)

Presentacion(Santiago)