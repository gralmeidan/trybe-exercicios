export default class Subject {
  constructor(private _name: string) {
    this.validateName(_name);
  }

  private validateName = (str: string) => {
    if (str.length < 3) throw new Error("Name must have at least 3 characters");
  };

  set name(str: string) {
    this.validateName(str);
    this._name = str;
  }

  get name() {
    return this._name;
  }
}
