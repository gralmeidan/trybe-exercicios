const { sum } = require('./script');

describe('Verifica se a função sum funciona corretamente', () => {
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

const { myRemove } = require('./script');

describe('Verifica se a função myRemove funciona corretamente', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  });
});

const { myFizzBuzz } = require('./script');

describe('Verifica se a função myFizzBuzz funciona corretamente', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3 * 5)).toBe('fizzbuzz');
  });
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('str')).toBeFalsy();
  });
});

const { encode, decode } = require('./script');

describe('Verifica se as funções encode e decode funcionam corretamente', () => {
  test('Teste se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('b, c, d, f, g')).toBe('b, c, d, f, g');
    expect(encode('6, 7, 8, 9, 0')).toBe('6, 7, 8, 9, 0');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const str = 'rangernation é uma nação';
    expect(encode(str)).toHaveLength(str.length);
  });
});

const { techList } = require('./script');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(
      techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
    ).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

const { hydrate } = require('./script');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água'
    );
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água'
    );
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água'
    );
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

const { searchEmployee } = require('./script');

describe('Teste se a função searchEmployee está funcionando corretamente', () => {
  test('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('Testa se a função retorna um erro ao receber um valor de tipo não esperado', () => {
    expect(() => searchEmployee(85796, 'firstname')).toThrow();
    expect(() => searchEmployee('8579-6', {})).toThrow();
  });
  test('Testa se a função retorna erro ao receber um id não existente', () => {
    expect(() => searchEmployee('123456', 'firstname')).toThrowError(
      'ID não identificada'
    );
  });
  test('Testa se a função retorna os valores esperados', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('firstName: Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('lastName: Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toBe(
      'specialities: Context API, RTL, Bootstrap'
    );
  });
});
