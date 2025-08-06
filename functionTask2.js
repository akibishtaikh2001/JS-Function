function oddEven(number) {
    if (number % 2 === 0) {
        const even = number / 2;
        return even;
    }
    else {
        const odd = number * 3 ;
        return odd;
    }
}

const result = oddEven(5);
console.log(result);

const result2 = oddEven(10);
console.log(result2);