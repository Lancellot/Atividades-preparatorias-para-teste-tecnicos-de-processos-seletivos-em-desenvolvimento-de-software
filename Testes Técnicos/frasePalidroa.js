const frasePalindroma = (frase) => {
    const fraselimpa = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
    const fraseinversa = fraselimpa.split('').reverse().join('');
    return fraselimpa === fraseinversa;
};

const frase = "A man, a plan, a canal, Panama";

console.log(frasePalindroma(frase));