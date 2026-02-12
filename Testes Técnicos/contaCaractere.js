const contaCaractere = (palavra, caractere) => {
    let contador = 0;
    for (const char of palavra) {
        if (char === caractere) {
            contador++;
        }
    }
    return contador;
};

const palavra = "banana";
const caractere = "a";

console.log(contaCaractere(palavra, caractere));