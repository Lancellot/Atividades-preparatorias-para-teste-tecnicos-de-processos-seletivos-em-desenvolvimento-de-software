const maiorPalavras = (frase) => {
    const palavras = frase.split(' ');
    let maior = '';

    for (const palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }
    return maior;
};

const frase = "O rato roeu a roupa do rei de Roma";

console.log(maiorPalavras(frase));