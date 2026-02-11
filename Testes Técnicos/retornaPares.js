function retornaPares(array) {
    let pares = [];

    for (let num of array) {

        if (num %2 === 0){
            pares.push(num);
        }

    }
    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6];

console.log(retornaPares(numeros));