function verificarLetraA(str) {
    const letrasEncontradas = str.match(/a/gi);
    const quantidade = letrasEncontradas ? letrasEncontradas.length : 0;

    if (quantidade > 0) {
        console.log(`A letra 'a' foi encontrada ${quantidade} vezes na string.`);
    } else {
        console.log(`A letra 'a' não foi encontrada na string.`);
    }
}

// String a ser verificada
const texto = "A aranha aranha Arnaldo amava andar.";
verificarLetraA(texto);
