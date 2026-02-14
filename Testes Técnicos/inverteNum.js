const inverteNum = (numeros) => {
   const numero = numeros[0].toString();
   const numeroInvertido = numero.split('').reverse().join('');
   return parseInt(numeroInvertido);
};

const numeros = [1234];

console.log(inverteNum(numeros));