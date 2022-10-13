import Person from "./Person";

export default class Employee extends Person {
  readonly registration: string;

  constructor(
    name: string,
    birthDate: Date,
    public salary: number,
    public admissionDate: Date
  ) {
    super(name, birthDate);
    this.registration = this.generateRegistration();
  }

  private generateRegistration = () => new Date(Date.now()).toISOString();
}
