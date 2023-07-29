

// Funciones en JS

/* const saludar = function( nombre ) {
    return `Hola, ${ nombre } `;
} */

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre } `;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre } `;
const saludar4 = () => `Hello World! `;

//console.log( saludar("Goku"));

//console.log( saludar );
console.log( saludar2 ("Hector"));
console.log( saludar3 ("Andormeda y Orion"));
console.log( saludar4() );

const getUser = () => ({    
        uid: "ABCDE",
        username: "El_Paspi1502"    
})

const user = getUser();
console.log( user );

const getUsarioActivo = ( nombre ) => ({    
        uid: "ABC567",
        username: nombre    
});

const usuarioActivo = getUsarioActivo("Hector");
console.log( usuarioActivo );