function make_avg(numbers){
    let sum = 0;
    for(const number of numbers){
       sum = sum + number; 
    }
    const avg = sum / numbers.length;
    return avg;

   
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avg = make_avg(numbers);
console.log(avg);