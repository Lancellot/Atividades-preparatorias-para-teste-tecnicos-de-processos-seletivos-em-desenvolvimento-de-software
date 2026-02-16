const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

numbers.forEach(num => {
    console.log(`${num}: ${fizzBuzz(num)}`);
});