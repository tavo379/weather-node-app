const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch( comando ) {
    case 'crear':
        console.log('Crear nota');
    break;

    case 'listar':
        console.log('Mostrar todas las notas');
    break;

    case 'actualizar':
        console.log('Actualizar todas las notas');
    break;
    
    default:
        console.log('No se reconoce el comando');
    break;
}