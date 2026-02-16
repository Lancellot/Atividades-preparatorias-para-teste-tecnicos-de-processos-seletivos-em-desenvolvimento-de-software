const verificadorPar = (num) => {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return 'Ímpar';
    }
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach(num => {
    console.log(`${num}: ${verificadorPar(num)}`);
});