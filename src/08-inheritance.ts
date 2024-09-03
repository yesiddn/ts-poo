export class Animal {
  constructor(public name: string) {

  }

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  // para no duplicar la propiedad name, no se le define el access modifier y de esta manera el parametro name queda solo en el scope del constructor
  constructor(name: string, public breed: string) {
    super(name); // hay que llamar al constructor de la clase padre para enviarle los parametros necesarios
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
  // greeting() {
  //   return super.greeting() + ' Woof!';
  // }
}

const fifi = new Animal('Fifi');
console.log(fifi.greeting());

const lassie = new Dog('Lassie', 'Collie');
console.log(lassie.greeting());
lassie.woof(3);
console.log('breed', lassie.breed);
