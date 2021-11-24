console.clear();

const { crearArchivo } = require ('./helpers/multiplicar.js');
const argv = require ('./config/yargs');
const colors = require('colors');

/*
const base = 5;
let salida = '';

for (let i=1; i<=10 ; i++) {
    salida += `${base} * ${i} = ${base * i} \n`;
}

fs.writeFile( 'tabla-5.txt', salida, (err) => {
    if (err) throw err;

    console.log('tabla-5.txt creada');
})
*/

//console.log(salida);

/*
const [ , , arg3 = '--base=5' ] = process.argv;
const [ , base] = arg3.split('=');


crearArchivo(base)
.then (nombreArchivo => console.log(nombreArchivo, ' creado'))
.catch (err => console.log(err));
*/

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log(colors.green(nombreArchivo), ' creado'))
.catch (err => console.log(err));
