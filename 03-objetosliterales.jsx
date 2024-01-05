//objetos literales
//todo elementos encerrado entre {} es un objeto

const persona = {
         nombres : "Felix Manuel",
         apellido : "Cruz Monge",
         edad : 19,
         direccion: {
            calle : "Tlatelolco",
            no: 5017,
            cuidad: "Puebla",
            cp: 7777,
         }
}

console.log(persona);
console.log(persona.direccion.cp);

//operador de propagacion o spread

const persona2 = {...persona};
persona.edad = 30;

console.log(persona2);
