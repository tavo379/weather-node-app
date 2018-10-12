

/* let getNombre = async() => {
    return 'Gustavo';
}
 */
// el async al devolver una promesa es equivalente al codigo de abajo
let getNombre = () => {
    return new Promise (( resolve, reject) => {
        setTimeout( () => {
            resolve('Gustavo');
        }, 3000);
    });
}

let saludo = async () => {
    
    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

saludo().then( mensaje => {
    console.log(mensaje);
})
/* .catch(e => {
    console.log('Error de ASYNC', e);
}) */