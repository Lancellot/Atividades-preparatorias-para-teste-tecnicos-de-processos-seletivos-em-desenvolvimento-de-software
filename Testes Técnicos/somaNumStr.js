const imprimirSoma = (texto) => {
    
    let soma = 0;
    
    for ( let caracterio of texto) { 
        if (!isNaN(caracterio)) {
            soma += Number(caracterio);
        }
    }

    return soma;
}

console.log(imprimirSoma('s2tr1in1g'));