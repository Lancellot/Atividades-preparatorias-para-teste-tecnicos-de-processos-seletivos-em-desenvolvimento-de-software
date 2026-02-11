const palavrasAnagramas = (palavra1, palavra2) => {
    const reversedPalavra = palavra1.split('').reverse().join('');
    return reversedPalavra === palavra2;
}


const palavra1 = 'amor';
const palavra2 = 'roma';

const palavra3 = 'amor';
const palavra4 = 'casa';

console.log(palavrasAnagramas(palavra1, palavra2));
console.log(palavrasAnagramas(palavra3, palavra4));