const argv = require('yargs')
        .options('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .options('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .options('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 9,
            describe: 'Indica hasta que número hará las multiplicaciones'
        })
        .check( (argv, options) => { 
            if ( isNaN(argv.b) ) {
                throw 'La base debe ser un número';
            }
            if ( isNaN(argv.h) ) {
                throw 'Hasta debe ser un número';
            }
            return true;
        })
        .argv;

module.exports = argv;