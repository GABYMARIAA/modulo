

//const modulo_somar = require('./modulo_somar')

//const somar = modulo_somar.soma
//somar(3,5)


//const modulo_sub = require('./modeulo_sub')

//const sub = modulo_sub.sub
//sub(3,5)

//const modulo_multi = require('./modulo_multi')

//const multi = modulo_multi.multi
//multi(3,5)

//const modulo_divi = require('./modulo_divi')

//const divi = modulo_divi.divi
//divi(3,5)


const fs =  require ('fs')
const chalk = require ('chalk')

fs.appendFile ('arquivo.txt', '', (err) => {
    if (err) throw err;
    console.log ('deu certo');

});

fs.writeFile('arquivo.txt', 'rapaz, eu n sei n', (err) => {
    if (err) throw err;
    console.log ('deu certo')
}) 

fs.readFile ('arquivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log( chalk.red (data))
})