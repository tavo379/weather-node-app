let empleados = [{
    id: 1,
    nombre: 'Gustavo'
},{
    id: 2,
    nombre: 'Luisa'
},{
    id: 3,
    nombre: 'Juan'
}];

let salarios =  [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmployed = (id) => {

    return new Promise(( resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);
    
        if( !empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}


let getSalario = (empleado) => {
    
    return new Promise((resolve, reject) => {
        
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB) {
            reject(`No se encontro salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
 
}

getEmployed(10).then( empleado => {
        return getSalario(empleado);
    })
    .then( res => {
        console.log(`El salario de ${res.nombre} es ${res.salario}$`);
    })
    .catch(err => {
        console.log(err);
    })