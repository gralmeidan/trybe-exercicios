import Person from './Person';

type Notas = {
  provas: [number, number, number, number];
  trabalhos: [number, number];
};

export default class Student extends Person {
  public notas: Notas;

  constructor(nome: string, notas: Notas) {
    super(nome);

    this.notas = notas;
  }

  private getGradesAsArray = () =>
    ([] as number[]).concat(...Object.values(this.notas));

  public getSum = () => this.getGradesAsArray().reduce((a, b) => a + b);

  public getAverage = () => this.getSum() / this.getGradesAsArray().length;
}
