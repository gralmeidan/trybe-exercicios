// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(({name}) => name === 'foo', (err) => {
      try {
        expect(err).toBeInstanceOf(Error)
        done()
      } catch (error) {
        done(error)
      }
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails(({name}) => name === 'Squirtle', (err, msg) => {
      try {
        expect(err).not.toBeInstanceOf(Error)
        expect(msg).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun')
        done()
      } catch (error) {
        done(error)
      }
    })
  });
});