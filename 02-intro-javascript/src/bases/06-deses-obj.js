

// Desestructuración
// Asignación desestructurante


const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "Soldado"
};

//const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ({ clave, nombre, edad, rango = "Capitán" } ) => {
    //console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng } = retornaPersona( persona );
const {lat, lng} = latlng;

console.log( nombreClave, anios);
console.log( lat, lng );