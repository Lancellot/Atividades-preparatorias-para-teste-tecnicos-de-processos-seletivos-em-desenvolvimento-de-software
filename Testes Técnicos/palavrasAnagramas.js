const palavrasAnagramas = (palavra1, palavra2) => {
    const reversedPalavra = palavra1.split('').reverse().join('');
    return reversedPalavra === palavra2;
}

console.log(palavrasAnagramas('amor', 'roma'));
console.log(palavrasAnagramas('casa', 'saca')); 