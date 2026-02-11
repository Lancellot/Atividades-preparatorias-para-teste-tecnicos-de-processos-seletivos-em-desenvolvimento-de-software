const piramideAsteriscos = (altura) => {

    let piramide = '';

    for (let i = 0; i < altura; i++) {
        
        const espacos = ' '.repeat(altura - i - 1);
        
        const asteriscos = '*'.repeat(2 * i + 1);

        piramide += espacos + asteriscos + '\n';
    }
    return piramide;
}

const altura = 5;
console.log(piramideAsteriscos(altura));