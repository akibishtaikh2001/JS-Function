function odd_even(number) {
    if (number % 2 === 0) {
        const even = 'even';
        return even;
    }
    else {
        const odd = 'odd';
        return odd;
    }
}

const result = odd_even(5);
console.log(result);
const result2 = odd_even(10);
console.log(result2);