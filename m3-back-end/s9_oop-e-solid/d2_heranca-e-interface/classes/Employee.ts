import Person from "./Person";

export default class Employee extends Person {
  readonly registration: string;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    private _admissionDate: Date
  ) {
    super(name, birthDate);

    this.validateSalary(_salary);
    this.validateAdmissionDate(_admissionDate);

    this.registration = this.generateRegistration();
  }

  private validateSalary = (salary: number) => {
    if (salary < 0) throw new Error("Salary must be positive");
  };

  private validateAdmissionDate = (date: Date) => {
    if (date > new Date())
      throw new Error("AdmissionDate can't be bigger than current Date");
  };

  private generateRegistration = () => new Date(Date.now()).toISOString();

  set salary(sal: number) {
    this.validateSalary(sal);
    this._salary = sal;
  }

  get salary() {
    return this._salary;
  }

  set admissionDate(date: Date) {
    this.validateAdmissionDate(date);
    this._admissionDate = date;
  }

  get admissionDate() {
    return this._admissionDate;
  }
}
