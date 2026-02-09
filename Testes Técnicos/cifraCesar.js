let n = 0;

function cifraCesar(texto, n) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 + n) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 + n) % 26 + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }    
    return resultado;
}


console.log(cifraCesar("abc", 5));