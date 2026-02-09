function parMenorDiferenca(array, x) {
    let vistos = new Set();

    for (let num of array) {
        let complemento = x - num;

        if (vistos.has(complemento)) {
            return [complemento, num];
        }
        vistos.add(num);
    }
    return null;
}

const numeros = [1, 4, 7, 10];
const alvo = 11;

console.log(parMenorDiferenca(numeros, alvo));
