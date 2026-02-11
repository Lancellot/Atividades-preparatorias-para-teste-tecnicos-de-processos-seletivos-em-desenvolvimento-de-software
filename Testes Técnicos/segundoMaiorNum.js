const segundoMaiornum = (arrNum) => {
    let maiorNum = 0;
    let segundoMaiorNum = 0;

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > maiorNum) {
            segundoMaiorNum = maiorNum;
            maiorNum = arrNum[i];
        }
    }
    return segundoMaiorNum;
}

const arrNum = [10, 5, 8, 20];
console.log(segundoMaiornum(arrNum));