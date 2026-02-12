const removedorDuplicados = (arr) => {
    const semDuplicados = new Set(arr);
    return [...semDuplicados];
};

const array = [1, 2, 3, 4, 4, 5, 5, 6, "a", "b", "b", "c"];

console.log(removedorDuplicados(array));