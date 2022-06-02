const service = require('./service')

describe('Testa a função randomNumber', () => {

  afterEach(() => jest.restoreAllMocks());

  it('Deve ter sido chamada', () => {
    const randomNumber = jest.spyOn(service, 'randomNumber')
      .mockReturnValue(10);
    const retorno = service.randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(retorno).toBe(10);
  })

  it('Deve retornar números aleatórios', () => {
    const r1 = service.randomNumber();
    const r2 = service.randomNumber();

    expect(r1).not.toBe(r2)
  })

})