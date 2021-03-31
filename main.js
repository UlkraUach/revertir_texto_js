const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Escribe tu texto a revertir: ', name => {
  console.log(name.split('').reverse().join(''));
  readline.close();
});
