const contadorVogais = (palavra) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of palavra.toLowerCase()) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

const palavra = 'Exemplo de palavra';

console.log(contadorVogais(palavra));