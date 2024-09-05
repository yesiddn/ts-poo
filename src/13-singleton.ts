// constructores privados -> singleton es un patron de diseño, uno de los patrones usados en la arquitectura solid. No se suele usar mucho. Garantiza que se cree una sola instancia de una clase previniendo bloqueos de memoria y problemas de sincronización y asi tener un solo punto de acceso a la instancia. Se usa mucho en bases de datos, logs, etc.

export class MyService {
  static instance: MyService | null = null;

  // los constructores tambien tienen access modifiers -> con private solo se puede usar el constructor dentro de la clase
  // constructor(public name: string) { }
  private constructor(public name: string) { }

  getname() {
    return this.name;
  }

  static create(name: string) {
    if (!MyService.instance) {
      console.log('Creating instance... 🚀 Just once');
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

// con el constructor privado se previene que se puedan crear instancias de la clase
// const myServiceOne = new MyService('Service 1');
// console.log(myServiceOne.getname());

// const myServiceTwo = new MyService('Service 2');
// console.log(myServiceTwo.getname());

// console.log('myServiceOne === myServiceTwo', myServiceOne === myServiceTwo); // deberia dar false porque aunque viene de la misma clase, son instancias diferentes

const myServiceOne = MyService.create('Service 1');
console.log(myServiceOne.getname());

const myServiceTwo = MyService.create('Service 2');
console.log(myServiceTwo.getname());

console.log('myServiceOne === myServiceTwo', myServiceOne === myServiceTwo);

MyService.instance = null;
const myServiceThree = MyService.create('Service 3');
console.log(myServiceThree.getname());
