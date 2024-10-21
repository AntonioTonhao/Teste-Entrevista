function fibonacciSequence(n) {
    const sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    return sequence;
}

function isInFibonacci(n) {
    const sequence = fibonacciSequence(n);
    if (sequence.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

// Informando o número que desejamos verificar
const numero = 21;
const resultado = isInFibonacci(numero);
console.log(resultado);
