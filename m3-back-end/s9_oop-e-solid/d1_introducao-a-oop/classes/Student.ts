import Person from './Person';

interface Notas {
  provas: [number, number, number, number];
  trabalhos: [number, number];
}

export default class Student extends Person {
  public notas: Notas;

  constructor(nome: string, notas: Notas) {
    super(nome);

    this.notas = notas;
  }
}
