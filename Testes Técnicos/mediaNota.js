const mediaNota = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
};

const notas = [8, 6, 7];

console.log(mediaNota(notas));