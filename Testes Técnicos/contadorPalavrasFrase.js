const contadorPalavras = (frase) => {
    const palavras = frase.split(' ');
    return palavras.length;
}

const frase = "Olá mundo, teste de contagem de palavras";

console.log(contadorPalavras(frase));