const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 9) => {
    try {
        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta ; i++) {
            consola += `${base} ${'*'.green} ${i} ${'='.yellow} ${base * i} \n`;
            salida += `${base} * ${i} = ${base * i} \n`;
        }

        const nombreArchivo = `tabla-${base}.txt`;

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync( nombreArchivo, salida);
        return nombreArchivo;
        
    } catch (err) {
        throw err;        
    }
}


/*
const crearArchivo = (base = 5) => {
    return new Promise(( resolve, reject ) => {

        let salida = '';

        for (let i=1; i<=10 ; i++) {
            salida += `${base} * ${i} = ${base * i} \n`;
        }

        const nombreArchivo = `tabla-${base}.txt`;

        try {
            fs.writeFileSync( nombreArchivo, salida);
            resolve(nombreArchivo);
        } catch (err) {
            reject(err);
        }
    })
}
*/

module.exports = {
//    crearArchivo: crearArchivo
    crearArchivo
}