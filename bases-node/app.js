const { crearArchivo, listarTabla }  = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err)); 
            console.log('Crear');
    break;
    
    default:
    console.log('Comando no reconocido');
}


