

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 5532121,
        lat: 14.3232,
        lng: 34.9233321

    }
};


console.log( persona );

//console.table( persona );

//const persona2 = persona;        // copia de referencia
//persona2.nombre = "Peter";

const persona2 = { ...persona };   // Clon del objeto
persona2.nombre = "Peter";

console.log(persona2);