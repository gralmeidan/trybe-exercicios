const service = require('./service')

describe('Testa a função randomNumber', () => {

  afterEach(() => jest.restoreAllMocks());

  it('Deve ter sido chamada', () => {
    const randomNumber = jest.spyOn(service, 'randomNumber')
      .mockReturnValue(10);
    const retorno = service.randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(retorno).toBe(10);
  });

  it('Deve retornar números aleatórios', () => {
    const r1 = service.randomNumber();
    const r2 = service.randomNumber();

    expect(r1).not.toBe(r2)
  });

  it('Deve ter sua implementação modificada para realizar divisões', () => {
    const randomNumber = jest.fn()
      .mockImplementationOnce((a, b) => (a / b));

    expect(randomNumber(4,2)).toBe(2);
  });

  it('Deve ter sua implementação modificada para realizar multiplicações', () => {
    const randomNumber = jest.fn()
      .mockImplementation((a, b, c) => (a * b * c));

    expect(randomNumber(4,2,2)).toBe(16);
    expect(randomNumber(10,2,3)).toBe(60);

    randomNumber
      .mockClear()
      .mockImplementation((a) => a * 2);

    expect(randomNumber(5)).toBe(10);
  });

})

describe('Testa a função capitalize', () => {

  it('Deve ter sua implementação modificada para o oposto', () => {
    const capitalize = jest.fn()
      .mockImplementation((str) => str.toLowerCase());

    expect(capitalize('FOO')).toBe('foo');
    expect(capitalize('BAR')).toBe('bar');
    jest.restoreAllMocks()
  })

  it('Deve retornar uma string capitalizada', () => {
    expect(service.capitalize('foo')).toBe('FOO');
    expect(service.capitalize('bar')).toBe('BAR');
  });
})

describe('Testa a função firstLetter', () => {
  
  it('Deve ter sua implementação modificada para o oposto', () => {
    const firstLetter = jest.fn()
      .mockImplementation((str) => str[str.length - 1]);

    expect(firstLetter('foo')).toBe('o');
    expect(firstLetter('bar')).toBe('r');
    jest.restoreAllMocks()
  })

  it('Deve retornar a primeira letra de uma string', () => {
    expect(service.firstLetter('foo')).toBe('f');
    expect(service.firstLetter('bar')).toBe('b');
  });
})

describe('Testa a função concatenate', () => {

  it('Deve ter sua implementação modificada para receber mais strings', () => {
    const concatenate = jest.fn()
      .mockImplementation((...str) => str.reduce((prev, str) => `${prev}${str}`, ''));

    expect(concatenate('f','o','o')).toBe('foo');
    expect(concatenate('b','a','r')).toBe('bar');
    jest.restoreAllMocks()
  })

  it('Deve concatenar duas strings', () => {
    expect(service.concatenate('foo', 'bar')).toBe('foobar');
    expect(service.concatenate('bar', 'foo')).toBe('barfoo');
  });
})

describe("testando a requisição", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});