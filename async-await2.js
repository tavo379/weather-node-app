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

let getEmployed = async (id) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);

    if( !empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`);
    } else {
        return empleadoDB;
    }  
}


let getSalario = async (empleado) => {
    
    let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB) {
        throw new Error(`No se encontro salario para el usuario ${ empleado.nombre }`);
    } else {
        return{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmployed(id);
    let res = await getSalario(empleado);

    return `${ res.nombre } tiene un salario de ${res.salario}$`; 
}

getInformacion(3)
    .then( mensaje => console.log(mensaje))
    .catch(err => console.log(err));

//falta manejar los errores