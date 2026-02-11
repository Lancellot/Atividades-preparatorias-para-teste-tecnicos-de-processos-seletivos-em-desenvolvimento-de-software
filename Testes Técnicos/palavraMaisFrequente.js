const palavraMaisFrequente = (texto) => {
    const palavras = texto.toLowerCase().split(' ');
    const frequencia = {};

    for (const palavra of palavras) {
        if (frequencia[palavra]) {
            frequencia[palavra]++;
        } else {
            frequencia[palavra] = 1;
        }
    }
    
    let maisFrequente = "";
    let maxFrequencia = 0;

    for (const palavra in frequencia) {
        if (frequencia[palavra] > maxFrequencia) {
            maxFrequencia = frequencia[palavra];
            maisFrequente = palavra;
        }
    }
    return maisFrequente;
}

const texto = "teste teste exemplo exemplo exemplo";

console.log(palavraMaisFrequente(texto));