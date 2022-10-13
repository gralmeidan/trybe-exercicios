import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    public subject: Subject
  ) {
    super(name, birthDate, salary, new Date());
  }
}
