let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

let { nombre: primerNombre , apellido: primerApellido, poder: power } = deadpool;
console.log(primerNombre, primerApellido, power);