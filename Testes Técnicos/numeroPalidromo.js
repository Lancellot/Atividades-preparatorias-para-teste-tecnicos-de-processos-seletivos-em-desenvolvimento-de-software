const numeroPalidromo = (num) => {
    const numeroTexto = num.toString();
    const numeroReverso = numeroTexto.split('').reverse().join('');
    return numeroTexto === numeroReverso;
}

const numero = 12321;

console.log(numeroPalidromo(numero));