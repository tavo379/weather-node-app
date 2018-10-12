/* function sumar(a, b) {
    return a + b;
} */

let sumar = (a, b) => a + b;
   
let saludar = () => 'hola mundo';

let saludo = nombre => `hola ${nombre}`;
//nombre en este caso es el parametro de la funcion

let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};


console.log(saludo('Gustavo'));
console.log(saludar());
console.log(sumar(10, 20));
console.log(deadpool.getNombre());