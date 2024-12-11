// prime numbers: only divisible by one ex: 2, 3, 5, 7, 11, 13
// Write a function to check if a number is prime

function isPrime(num) {

    if (num % 2 == 1) {
        console.log("Prime num")
    } else {
        console.log("Not prime")
    }
}
isPrime(7);

// Implement a loop to print numbers from 1 to 100, replacing:
// Multiples of 3 with "Fizz".
// Multiples of 5 with "Buzz".

function FizzBuzz() {
    for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
}

// FizzBuzz();

// % - remainder operator returns the remainder left over when one operand is divided by a second operand. 4%2 = 0, 3%5 = 2

let a = 5%3;
console.log(a) // 2