const exercise1 = () => {
  const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
}

// exercise1()

const exercise2 = () => {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const ordenar = () => oddsAndEvens.sort((a,b) => parseInt(a) - parseInt(b))

  console.log(`Os números ${ordenar()} se encontram ordenados de forma crescente!`)
}

exercise2()