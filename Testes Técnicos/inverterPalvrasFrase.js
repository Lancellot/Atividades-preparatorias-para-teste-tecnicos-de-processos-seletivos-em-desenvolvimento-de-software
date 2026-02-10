const inverterPalavrasFrase = (frase) => {
    const palavras = frase.split(' ');
    const palavrasInvertidas = palavras.reverse();
    return palavrasInvertidas.join(' ');
};

const frase = "Olá mundo, teste de inversão de palavras";

console.log(inverterPalavrasFrase(frase));