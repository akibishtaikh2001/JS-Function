/**
 * for a given striing tell me wheather it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size %2 === 0){
        console.log('even size');
        return true;
        
    } 
    else{
        console.log('odd size');
        return false;
        
    }
    
}

// evenSizedString('Dhaka');
// evenSizedString('Faka');

function doubleOrtriple(number, doDouble){
    if(doDouble){
        const result = number *2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrtriple(5, true));
// console.log(doubleOrtriple(5, false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

// numberOfElements([12, 212, 121, 211 ,545 ,454544, 5454854, 6565])


//Object Call 
function getAge(person){
    const age = person.age;
    return age;
}
const person = {
    name: 'Akib',
    age: 26,
    address: 'Bogura',
}
const age = getAge(person);
console.log(age);
