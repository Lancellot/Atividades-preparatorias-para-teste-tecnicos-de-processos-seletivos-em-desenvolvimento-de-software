const somaPar = (numeros) => { 
    let soma = 0;
    for (const num of numeros) {
        if (num % 2 === 0) {
            soma += num;
        }
    }
    return soma;
};

const numeros = [1, 2, 3, 4, 5, 6];

console.log(somaPar(numeros));