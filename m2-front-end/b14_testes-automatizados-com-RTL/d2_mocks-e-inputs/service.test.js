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
