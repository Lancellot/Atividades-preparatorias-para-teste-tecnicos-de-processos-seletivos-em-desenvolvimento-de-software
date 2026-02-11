function retornarIndices(array, x) {
    let vistos = new Map();

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let complemento = x - num;
        
        if (vistos.has(complemento)) {
            return [vistos.get(complemento), i];
        }
        vistos.set(num, i);
    }
    return null;   
}
const numeros = [10, 15, 3, 7];
const alvo = 17;

console.log(retornarIndices(numeros, alvo));