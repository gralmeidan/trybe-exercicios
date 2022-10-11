export default class Person {
  constructor(private _name: string, private _birthDate: Date) {}

  public get name() {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName.length >= 3 ? newName : this._name;
  }

  public get birthDate() {
    return this._birthDate;
  }

  public set birthDate(newDate: Date) {
    const now = new Date(Date.now());
    if (now >= newDate && now.getFullYear() - newDate.getFullYear() <= 120) {
      this._birthDate = newDate;
    }
  }
}
