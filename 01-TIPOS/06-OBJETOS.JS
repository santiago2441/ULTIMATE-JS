// personaje de pelicula

let nombre = "Rayo Macuin";
let saga = "cars";
let edad = 30;

let personaje = {
    nombre: "Rayo Macuin",
    saga: "Cars",
    edad: 30,
};
console.log (personaje);
console.log (personaje.saga);
console.log (personaje ["nombre"]);

personaje.edad = 32;
personaje.edad = [33];

delete personaje.edad;

console.log (personaje);

