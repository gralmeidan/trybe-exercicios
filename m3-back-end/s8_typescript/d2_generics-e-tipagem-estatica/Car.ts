class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  public honk() {
    console.log('🔊🔊🔊');
  }

  public turnOn() {
    console.log('Welcome aboard Captain, all systems online');
  }

  public turnOff() {
    console.log('Tursnfffff');
  }

  public speedUp() {
    console.log('Acelerei');
  }

  public speedDown() {
    console.log('Desacelerei');
  }

  public stop() {
    console.log('parei');
  }

  public turn(direction: string) {
    console.log(`Virei pra ${direction}`);
  }
}

export default Car;
