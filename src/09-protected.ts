// las clases abstractas no permiten ser instanciadas ya que deben ser usadas por medio de las clases hijas y estas deben tener comportamientos mas especificos
// las clases hijas son las que al final definen el comportamiento de la clase abstracta
export abstract class Animal {
  constructor(protected name: string) {

  }

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
    this.move();
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name}`); // al usar el access modifier private, no se puede acceder a la propiedad name desde la clase que hereda, mientras que con protected permite acceder a la propiedad name pero no modificarla
    }
  }

  move() {
    console.log('Running as a dog...');
    super.move();
  }
}

const lassie = new Dog('Lassie', 'Collie');
console.log(lassie.greeting());
lassie.woof(1);
console.log('breed', lassie.breed);
