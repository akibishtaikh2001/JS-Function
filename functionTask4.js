function count_zero(array){
    let count = 0;
    for( const number of array){
        if(number === 0){
            count = count + 1;
        }
    }
    return count;
}

const zero = count_zero([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
console.log(zero);