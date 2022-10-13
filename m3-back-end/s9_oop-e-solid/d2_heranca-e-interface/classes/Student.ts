import Person from "./Person";

class SizeLimitedArray extends Array {
  constructor(public sizeLimit: number) {
    super();
  }

  push(...items: number[]): number {
    if (this.length + items.length > this.sizeLimit) {
      throw new Error("Could not append items past size limit");
    }
    return super.push(...items);
  }
}

export default class Student extends Person {
  protected _enrollment: string;
  protected _worksGrades: number[];
  protected _examsGrades: number[];

  private generateEnrollment = () => new Date(Date.now()).toISOString();

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._worksGrades = new SizeLimitedArray(2);
    this._examsGrades = new SizeLimitedArray(4);
  }

  public sumGrades = () =>
    [...this.worksGrades, ...this.examsGrades].reduce((a, b) => a + b);

  public sumAverageGrades = () =>
    this.sumGrades() / this.worksGrades.length + this.examsGrades.length;

  public get enrollment() {
    return this._enrollment;
  }

  public set worksGrades(newGrades: number[]) {
    newGrades.forEach(n => this._worksGrades.push(n));
  }

  public get worksGrades() {
    return this._worksGrades;
  }

  public set examsGrades(newGrades: number[]) {
    newGrades.forEach(n => this._examsGrades.push(n));
  }
}
