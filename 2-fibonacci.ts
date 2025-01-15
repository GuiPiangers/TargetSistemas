function generateFibonacciSequence(maxNumber: number) {
    const fibSequence = [0, 1];

    while (fibSequence[fibSequence.length - 1] < maxNumber) {
        const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextValue);
    }

    return fibSequence
}

function isFibonacciNumber(num: number){
    if (num < 0) return `${num} não pertence à sequência de Fibonacci.`;

    const fibSequence = generateFibonacciSequence(num);

    if (fibSequence.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(isFibonacciNumber(1));
console.log(isFibonacciNumber(2));
console.log(isFibonacciNumber(3));
console.log(isFibonacciNumber(4));
console.log(isFibonacciNumber(5));
console.log(isFibonacciNumber(6));
console.log(isFibonacciNumber(8));