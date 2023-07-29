


const nombre = "Hector";
const apellido = "Orozco";

//const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = ` ${ nombre } ${ apellido }`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return "Hello " + nombre;
}

console.log( ` Este es un texto: ${ getSaludo( nombre )}`);